import * as S from "./MarketDetailFooter.styles";

import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteScroll } from "../../../../commons/hooks/customs/useInfiniteScroll";

import CommentWrite from "../../../../commons/comments/board/write/CommentWrite.index";
import CommentList from "../../../../commons/comments/board/list/CommentList.index";

export default function MarketDetailFooter() {
  const { data: dataScroll, onLoadMore } = useInfiniteScroll();

  return (
    <S.Footer>
      <CommentWrite />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {dataScroll?.fetchBoardComments.map((el, _) => <CommentList key={el._id} el={el}></CommentList>) ?? <></>}
      </InfiniteScroll>
    </S.Footer>
  );
}
