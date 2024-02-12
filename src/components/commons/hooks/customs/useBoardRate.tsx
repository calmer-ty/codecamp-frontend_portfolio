import { FETCH_BOARD } from "../queries/useFetchBoard";

import { useLikeBoard } from "../mutations/useLikeBoard";
import { useDislikeBoard } from "../mutations/useDislikeBoard";

import { Modal } from "antd";
import { useRouter } from "next/router";

export const useBoardRate = () => {
  const router = useRouter();

  const [likeBoard] = useLikeBoard();
  const [dislikeBoard] = useDislikeBoard();

  const onClickLike = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await likeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDislike = async (): Promise<void> => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await dislikeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
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
