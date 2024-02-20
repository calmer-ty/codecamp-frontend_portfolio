import * as S from "./MarketDetail.styles";
// Custom Hooks
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
import { useFetchMarket } from "../../../commons/hooks/queries/useFetchMarket";
import { useMarket } from "../../../commons/hooks/customs/useMarket";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteScroll } from "../../../commons/hooks/customs/useInfiniteScroll";
// UI
import CommentWrite from "../../../commons/comments/board/write/CommentWrite.index";
import CommentList from "../../../commons/comments/board/list/CommentList.index";
import MarketDetailBody from "./body/MarketDetailBody.index";
import MarketDetailHeader from "./header/MarketDetailHeader.index";

export default function MarketDetail(): JSX.Element {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchMarket({
    useditemId: id,
  });
  const { data: dataScroll, onLoadMore } = useInfiniteScroll();

  const { onClickDelete } = useMarket();

  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <MarketDetailHeader data={data} />
          <MarketDetailBody data={data} onClickDelete={onClickDelete} />
        </S.CardWrap>

        <CommentWrite />
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {dataScroll?.fetchBoardComments.map((el, _) => <CommentList key={el._id} el={el}></CommentList>) ?? <></>}
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
