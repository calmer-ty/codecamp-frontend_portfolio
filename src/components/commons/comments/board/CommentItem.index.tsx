import { useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

import type { ChangeEvent, MouseEvent } from "react";
import { FETCH_COMMENTS } from "../../../units/comment/list/CommentList.queries";
import type {
  IBoardComment,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentItem.styles";
import CommentWrite from "../../../units/comment/write/CommentWrite.container";

interface CommentItemProps {
  el: IBoardComment;
}

export const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export default function CommentItem(props: CommentItemProps): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  // Delete
  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteComment({
        variables: {
          boardCommentId,
          password,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    setIsOpenDeleteModal(true);
    setBoardCommentId(event.currentTarget.id);
  };
  const onClickCloseDeleteModal = (): void => {
    setIsOpenDeleteModal(false);
  };

  // Update
  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  // UI
  return (
    <>
      {isOpenDeleteModal && (
        <S.CommentDeleteModal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCloseDeleteModal}
        >
          <span>비밀번호 입력: </span>
          <input type="password" onChange={onChangePassword} />
        </S.CommentDeleteModal>
      )}

      {!isEdit ? (
        <S.ListItem key={props.el._id} id={props.el._id}>
          <S.RowWrapper>
            <S.Avatar src="/images/boardComment/list/ic_profile.png" />
            <S.ColumnWrapper>
              <S.RowWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.RateScore value={props.el.rating} disabled={true} />
              </S.RowWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.ColumnWrapper>
          </S.RowWrapper>
          <S.CreateDate>{getDate(props.el.createdAt)}</S.CreateDate>
          <S.ButtonWrapper>
            <S.EditButton onClick={onClickUpdate} />
            <S.DeleteButton
              onClick={onClickOpenDeleteModal}
              id={props.el._id}
            />
          </S.ButtonWrapper>
        </S.ListItem>
      ) : (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
