import { useRouter } from "next/router";
import { useLikeBoard } from "../../mutations/board/useLikeBoard";
import { useDislikeBoard } from "../../mutations/board/useDislikeBoard";

import { FETCH_BOARD, useFetchBoard } from "../../queries/board/useFetchBoard";

import type { IQuery, IQueryFetchBoardArgs } from "../../../../../commons/types/generated/types";

export const useBoardLike = (): {
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;
} => {
  const router = useRouter();
  const boardId = router.query.boardId as string;
  const { data } = useFetchBoard({ boardId });

  const [likeBoard] = useLikeBoard();
  const [dislikeBoard] = useDislikeBoard();

  const onClickLike = async (): Promise<void> => {
    const { Modal } = await import("antd");

    try {
      await likeBoard({
        variables: { boardId },
        optimisticResponse: {
          likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
        },
        update: (cache, { data }) => {
          const prevData = cache.readQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>({
            query: FETCH_BOARD,
            variables: {
              boardId,
            },
          });
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: {
              boardId,
            },
            data: {
              fetchBoard: {
                _id: boardId,
                __typename: "Board",
                ...prevData?.fetchBoard,
                likeCount: data?.likeBoard,
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickDislike = async (): Promise<void> => {
    const { Modal } = await import("antd");
    try {
      await dislikeBoard({
        variables: { boardId },
        update: (cache, { data }) => {
          const prevData = cache.readQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>({
            query: FETCH_BOARD,
            variables: {
              boardId,
            },
          });
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: {
              boardId,
            },
            data: {
              fetchBoard: {
                _id: boardId,
                __typename: "Board",
                ...prevData?.fetchBoard,
                dislikeCount: data?.dislikeBoard,
              },
            },
          });
        },
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
