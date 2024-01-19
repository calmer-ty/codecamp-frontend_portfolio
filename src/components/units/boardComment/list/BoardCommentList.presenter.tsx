import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import * as S from "./BoardCommentList.styles";
// 무한 스크롤
import InfiniteScroll from "react-infinite-scroller";
// 댓글 리스트 아이템
import BoardCommentListItem from "./BoardCommentList.presenterItem";

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
        >
          {props.data?.fetchBoardComments.map((el, _) => (
            <BoardCommentListItem key={el._id} el={el} />
          )) ?? <></>}
        </InfiniteScroll>
      </S.Container>
    </S.Wrapper>
  );
}
