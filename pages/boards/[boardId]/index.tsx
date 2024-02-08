import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.index";
import CommentWrite from "../../../src/components/units/comment/write/CommentWrite.container";
import CommentList from "../../../src/components/units/comment/list/CommentList.container";

export default function BoardsDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
