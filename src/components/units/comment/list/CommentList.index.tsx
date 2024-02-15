import * as S from "./CommentList.styles";
import CommentItem from "../../../commons/comments/board/CommentItem.index";

import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteScroll } from "../../../commons/hooks/customs/useInfiniteScroll";

export default function CommentListUI(): JSX.Element {
  const { data, onLoadMore } = useInfiniteScroll();
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
