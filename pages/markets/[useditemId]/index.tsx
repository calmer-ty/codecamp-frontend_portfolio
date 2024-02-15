import CommentList from "../../../src/components/units/comment/list/CommentList.container";
import CommentWrite from "../../../src/components/commons/comments/board/write/CommentWrite.container";
import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";

export default function BoardsDetailPage(): JSX.Element {
  return (
    <>
      <MarketDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
