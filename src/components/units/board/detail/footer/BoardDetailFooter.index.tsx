import { memo } from "react";
// Custom Hooks
import { useScrollComment } from "../../../../commons/hooks/customs/board/useScrollComment";
// Component
import InfiniteScroll from "react-infinite-scroller";
import CommentWrite from "../../../../commons/comments/board/write/CommentWrite.index";
import CommentList from "../../../../commons/comments/board/list/CommentList.index";

import * as S from "./BoardDetailFooter.styles";

function BoardDetailFooter(): JSX.Element {
  const { data, onLoadMore } = useScrollComment();

  return (
    <S.Footer>
      <CommentWrite isEdit={false} />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments.map((el, _) => <CommentList key={el._id} el={el}></CommentList>) ?? <></>}
      </InfiniteScroll>
    </S.Footer>
  );
}
export default memo(BoardDetailFooter);
