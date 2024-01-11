import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentListItemProps } from "./BoardCommentList.types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListitem(
  props: IBoardCommentListItemProps
): JSX.Element {
  const router = useRouter();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 삭제 기능
  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    setIsOpenDeleteModal(true);
    setBoardCommentId(event.currentTarget.id);
  };

  const onClickCloseDeleteModal = (): void => {
    setIsOpenDeleteModal(false);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  // 수정 기능
  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.CommentDeleteModal
          title="댓글을 삭제하시겠습니까?"
          open={isOpenDeleteModal}
          onOk={onClickDelete}
          onCancel={onClickCloseDeleteModal}
        >
          <div> 비밀번호 입력:</div>
          <input type="password" onChange={onChangeDeletePassword} />
        </S.CommentDeleteModal>
      )}

      {!isEdit ? (
        <S.List>
          <S.RowWrap>
            <S.Avatar src="/images/boardComment/list/ic_profile.png" />
            <S.ColWrap>
              <S.Title>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Like value={props.el.rating} disabled={true} />
              </S.Title>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.ColWrap>
          </S.RowWrap>

          <S.CreateDate>{getDate(props.el?.createdAt)}</S.CreateDate>

          <S.OptBtnWrap>
            <S.EditBtn onClick={onClickUpdate} />
            <S.DelBtn id={props.el._id} onClick={onClickOpenDeleteModal} />
          </S.OptBtnWrap>
        </S.List>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
