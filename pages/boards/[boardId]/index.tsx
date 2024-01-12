import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/comment/write";
import CommentList from "../../../src/components/units/comment/list";
// import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
// import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";

export default function BoardsDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
      {/* <BoardCommentWrite /> */}
      {/* <BoardCommentList /> */}
    </>
  );
}
