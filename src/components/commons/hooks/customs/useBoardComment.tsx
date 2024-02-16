import { useState } from "react";

import { useDeleteBoardComment } from "../mutations/useDeleteBoardComment";

import { FETCH_COMMENTS } from "../queries/useFetchBoardComment";
import type { ChangeEvent } from "react";

import { Modal } from "antd";
import { useIdCheck } from "./useIdCheck";

interface IUseBoardCommentArgs {
  boardId: string;
  boardCommentId: string;
}

export const useBoardComment = (args: IUseBoardCommentArgs) => {
  const { id } = useIdCheck("boardId");
  const [deletePassword, setDeletePassword] = useState("");

  const [deleteComment] = useDeleteBoardComment();

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeletePassword(event.target.value);
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteComment({
        variables: {
          boardCommentId: args.boardCommentId,
          password: deletePassword,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickDelete,
    onChangeDeletePassword,
  };
};
