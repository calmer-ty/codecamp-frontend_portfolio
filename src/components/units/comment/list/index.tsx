import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";
import * as S from "./CommentList.styles";

import type { ChangeEvent, MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function CommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);

  // const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  // Delete
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
  // const onClickUpdate = () => {};

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

      <S.Wrapper>
        <S.Container>
          {data?.fetchBoardComments.map((el) => (
            <S.ListItem key={el._id} id={el._id}>
              <S.RowWrapper>
                <S.Avatar src="/images/boardComment/list/ic_profile.png" />
                <S.ColumnWrapper>
                  <S.RowWrapper>
                    <S.Writer>{el.writer}</S.Writer>
                    <S.RateScore value={el.rating} disabled={true} />
                  </S.RowWrapper>
                  <S.Contents>{el.contents}</S.Contents>
                </S.ColumnWrapper>
              </S.RowWrapper>
              <S.CreateDate>{el.createdAt}</S.CreateDate>
              <S.ButtonWrapper>
                <S.EditButton />
                <S.DeleteButton onClick={onClickOpenDeleteModal} id={el._id} />
              </S.ButtonWrapper>
            </S.ListItem>
          ))}
        </S.Container>
      </S.Wrapper>
    </>
  );
}
