import { useState } from "react";

// Custom Hooks
import { FETCH_COMMENTS } from "../../../hooks/queries/useFetchBoardComment";
import { useIdCheck } from "../../../hooks/customs/useIdCheck";
import { useDeleteBoardComment } from "../../../hooks/mutations/useDeleteBoardComment";

import * as S from "./CommentList.styles";
import CommentWrite from "../write/CommentWrite.container";
import { Avatar, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";

import type { ChangeEvent, MouseEvent } from "react";
import type { IBoardComment } from "../../../../../commons/types/generated/types";

import { getDate } from "../../../../../commons/libraries/utils";

interface CommentItemProps {
  el: IBoardComment;
}

export default function CommentList(props: CommentItemProps): JSX.Element {
  const { id } = useIdCheck("boardId");
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const [deleteComment] = useDeleteBoardComment();

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
            variables: { boardId: id },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
          <S.FlexRow>
            <Avatar
              size={40}
              icon={<UserOutlined />}
              style={{ marginRight: "16px" }}
            />
            <S.FlexColumn>
              <S.ItemTop>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.RateScore value={props.el.rating} disabled={true} />
              </S.ItemTop>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreateDate>{getDate(props.el.createdAt)}</S.CreateDate>
            </S.FlexColumn>
          </S.FlexRow>
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
