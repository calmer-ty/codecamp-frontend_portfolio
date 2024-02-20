import * as S from "./BoardDetail.styles";
import CommentList from "../../../commons/comments/board/list/CommentList.index";
import CommentWrite from "../../../commons/comments/board/write/CommentWrite.index";

// Custon Hooks
import { useFetchBoard } from "../../../commons/hooks/queries/useFetchBoard";
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";

import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteScroll } from "../../../commons/hooks/customs/useInfiniteScroll";

import BoardDetailHeader from "./header/BoardDetailHeader.index";
import BoardDetailBody from "./body/BoardDetailBody.index";
import BoardDetailFooter from "./footer/BoardDetailFooter.index";

export default function BoardDetail(): JSX.Element {
  const { id } = useIdCheck("boardId");
  const { data } = useFetchBoard({
    boardId: id,
  });

  const { data: dataScroll, onLoadMore } = useInfiniteScroll();
  return (
    <S.Wrapper>
      <S.CardWrap>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
      </S.CardWrap>
      <BoardDetailFooter data={data} />
      <CommentWrite />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {dataScroll?.fetchBoardComments.map((el, _) => <CommentList key={el._id} el={el}></CommentList>) ?? <></>}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
