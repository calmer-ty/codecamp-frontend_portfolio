import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";
import { useQueryIdChecker } from "./useQueryIdChecker";

import { Modal } from "antd";

export const useBoardLike = () => {
  const { id } = useQueryIdChecker("boardId");

  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();

  const onClickLike = async (): Promise<void> => {
    if (typeof id !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await likeBoard({
        variables: { boardId: id },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDislike = async (): Promise<void> => {
    if (typeof id !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await dislikeBoard({
        variables: { boardId: id },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickLike,
    onClickDislike,
  };
};
