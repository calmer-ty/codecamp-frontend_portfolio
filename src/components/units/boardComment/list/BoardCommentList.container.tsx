import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import type { MouseEvent, ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
// UI
import BoardCommentListUI from "./BoardCommentList.presenter";
// QUERIES
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  // router 조건 충족 시 랜더링
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

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
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    setIsOpen(true);
    setBoardCommentId(event.currentTarget.id);
  };

  const onClickCloseDeleteModal = (): void => {
    setIsOpen(false);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <BoardCommentListUI
      data={data}
      isOpen={isOpen}
      onClickDelete={onClickDelete}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onClickCloseDeleteModal={onClickCloseDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}
