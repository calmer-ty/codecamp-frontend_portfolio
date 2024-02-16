import { useState } from "react";

import { useCreateBoardComment } from "../mutations/useCreateBoardComment";
import { useUpdateBoardComment } from "../mutations/useUpdateBoardComment";
import { useDeleteBoardComment } from "../mutations/useDeleteBoardComment";

import { FETCH_COMMENTS } from "../queries/useFetchBoardComments";

import { Modal } from "antd";
import { useIdCheck } from "./useIdCheck";

import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IFormData } from "../../comments/board/write/CommentWrite.types";
import type { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";

interface IUseBoardCommentArgs {
  boardCommentId: string;
  rating?: number;
  setRating?: Dispatch<SetStateAction<number | undefined>>;
  onToggleEdit?: () => void;
}

export const useBoardComment = (args: IUseBoardCommentArgs) => {
  const { id } = useIdCheck("boardId");
  const [deletePassword, setDeletePassword] = useState("");

  const [createComment] = useCreateBoardComment();
  const [updateComment] = useUpdateBoardComment();
  const [deleteComment] = useDeleteBoardComment();

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeletePassword(event.target.value);
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof args?.boardCommentId !== "string") return;
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

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);
    if (typeof args?.rating !== "number") return;
    try {
      await createComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: args.rating,
          },
          boardId: id,
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
    data.writer = "";
    data.password = "";
    data.contents = "";
    args.setRating?.(1);
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    if (data.contents === "") {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    if (data.password === "") {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents !== "") updateBoardCommentInput.contents = data.contents;
      if (data.rating !== args?.rating) updateBoardCommentInput.rating = args.rating;
      await updateComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: id },
          },
        ],
      });
      args.onToggleEdit?.();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickSubmit,
    onClickUpdate,
    onClickDelete,
    onChangeDeletePassword,
  };
};
