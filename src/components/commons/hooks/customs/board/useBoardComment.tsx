import { useEffect, useState } from "react";

import { useCreateBoardComment } from "../../mutations/board/useCreateBoardComment";
import { useUpdateBoardComment } from "../../mutations/board/useUpdateBoardComment";
import { useDeleteBoardComment } from "../../mutations/board/useDeleteBoardComment";

import { FETCH_COMMENTS } from "../../queries/board/useFetchBoardComments";

import { Modal } from "antd";
import { useIdCheck } from "../useIdCheck";

import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IFormData } from "../../../comments/board/write/CommentWrite.types";
import type { IUpdateBoardCommentInput } from "../../../../../commons/types/generated/types";

interface IUseBoardCommentProps {
  rating?: number;
  boardCommentId?: string;
  onToggleEdit?: () => void;
}

export const useBoardComment = (
  props: IUseBoardCommentProps
): {
  onClickCreate: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onClickDelete: () => Promise<void>;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  rating: number | undefined;
  setRating: Dispatch<SetStateAction<number | undefined>>;
} => {
  const { id } = useIdCheck("boardId");
  const [rating, setRating] = useState(props.rating);

  useEffect(() => {
    console.log("rating이 변경되었습니다:", rating);
    // 여기에 필요한 로직을 추가하세요
  }, [rating]);

  const [deletePassword, setDeletePassword] = useState("");

  const [createComment] = useCreateBoardComment();
  const [updateComment] = useUpdateBoardComment();
  const [deleteComment] = useDeleteBoardComment();

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeletePassword(event.target.value);
  };

  const onClickCreate = async (data: IFormData): Promise<void> => {
    console.log(data);
    try {
      await createComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: rating ?? 0,
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
    setRating(0);
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    console.log(data);
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
      if (typeof props.boardCommentId !== "string") return;
      if (data.contents !== "") updateBoardCommentInput.contents = data.contents;
      if (rating !== props.rating) {
        // 스테이트를 사용해 변경된 값으로 업데이트를 해주면 반영이 된다.
        updateBoardCommentInput.rating = rating;
      }
      await updateComment({
        variables: {
          updateBoardCommentInput,
          password: data.password,
          boardCommentId: props.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: id },
          },
        ],
      });
      props.onToggleEdit?.();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof props?.boardCommentId !== "string") return;
    try {
      await deleteComment({
        variables: {
          boardCommentId: props.boardCommentId,
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
    onClickCreate,
    onClickUpdate,
    onClickDelete,
    onChangeDeletePassword,
    rating,
    setRating,
  };
};
