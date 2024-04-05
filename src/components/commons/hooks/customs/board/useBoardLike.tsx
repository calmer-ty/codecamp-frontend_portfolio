import { useRouter } from "next/router";
import { FETCH_BOARD, useFetchBoard } from "../../queries/board/useFetchBoard";

import { useLikeBoard } from "../../mutations/board/useLikeBoard";
import { useDislikeBoard } from "../../mutations/board/useDislikeBoard";
import { useIdCheck } from "../useIdCheck";

import { Modal } from "antd";

export const useBoardLike = () => {
  const { id } = useIdCheck("boardId");
  const { data } = useFetchBoard({
    boardId: id,
  });

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
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD,
        //     variables: { boardId: router.query.boardId },
        //   },
        // ],
        optimisticResponse: {
          likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
        },
        update: (cache, { data }) => {
          // writeQuery => 내가 없던걸 추가
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: {
              boardId: id,
            },
            data: {
              fetchBoard: {
                _id: id,
                __typename: "Board",
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
