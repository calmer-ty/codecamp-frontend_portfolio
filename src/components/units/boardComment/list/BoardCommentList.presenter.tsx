import * as S from "./BoardCommentList.styles";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
// 무한 스크롤
import InfiniteScroll from "react-infinite-scroller";
// 댓글 리스트 아이템
import BoardCommentListitem from "./BoardCommentList.presenterItem";

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <BoardCommentListitem key={el._id} el={el} />
          )) ?? <></>}
        </InfiniteScroll>
      </S.Container>
    </S.Wrapper>
  );
}
