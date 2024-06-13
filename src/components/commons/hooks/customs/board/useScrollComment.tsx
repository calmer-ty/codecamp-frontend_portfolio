import { useFetchBoardComments } from "../../queries/board/useFetchBoardComments";

export const useScrollComment = (): {
  data: any;
  onLoadMore: () => void;
} => {
  const { data, fetchMore } = useFetchBoardComments();
  // 댓글 무한 스크롤
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // console.log(prev);
        // console.log(fetchMoreResult);
        if (fetchMoreResult?.fetchBoardComments === undefined) return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };
  return {
    data,
    onLoadMore,
  };
};
