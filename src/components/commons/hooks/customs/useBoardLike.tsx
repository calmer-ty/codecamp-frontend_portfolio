import { useRouter } from "next/router";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";
import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";

export const useBoardLike = () => {
  const router = useRouter();
  const boardId = router.query.boardId;

  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();

  const onClickLike = async (): Promise<void> => {
    if (typeof boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await likeBoard({
        variables: { boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDislike = async (): Promise<void> => {
    if (typeof boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await dislikeBoard({
        variables: { boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return {
    onClickLike,
    onClickDislike,
  };
};
