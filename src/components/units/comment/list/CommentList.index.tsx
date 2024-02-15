import CommentItem from "../../../commons/comments/board/CommentItem.index";
import InfiniteScroll from "react-infinite-scroller";
import { useFetchBoardComments } from "../../../commons/hooks/queries/useFetchBoardComment";

import * as S from "./CommentList.styles";
export default function CommentListUI(): JSX.Element {
  const { data, fetchMore } = useFetchBoardComments();
  // 댓글 무한 스크롤
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoardComments === undefined)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {data?.fetchBoardComments.map((el, _) => (
              <CommentItem key={el._id} el={el}></CommentItem>
            )) ?? <></>}
          </InfiniteScroll>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
