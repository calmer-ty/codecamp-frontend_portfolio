import Link from "next/link";
// Custom Hooks
import { useBoard } from "../../../../commons/hooks/customs/board/useBoard";
import { useScrollComment } from "../../../../commons/hooks/customs/board/useScrollComment";
// Component
import InfiniteScroll from "react-infinite-scroller";
import CommentWrite from "../../../../commons/comments/board/write/CommentWrite.index";
import CommentList from "../../../../commons/comments/board/list/CommentList.index";
// Type
import type { IBoardDetailProps } from "../BoardDetail.types";
// Style
import * as S from "./BoardDetailFooter.styles";

export default function BoardDetailFooter(props: IBoardDetailProps): JSX.Element {
  const { onClickDelete } = useBoard();
  const { data, onLoadMore } = useScrollComment();

  return (
    <S.Footer>
      <S.LinkWrap>
        <Link href={"/boards"}>
          <S.LinkBtn>목록으로</S.LinkBtn>
        </Link>
        <Link href={`/boards/${props.data?.fetchBoard._id}/edit`}>
          <S.LinkBtn>수정하기</S.LinkBtn>
        </Link>
        <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
      </S.LinkWrap>
      <CommentWrite isEdit={false} />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments.map((el, _) => <CommentList key={el._id} el={el}></CommentList>) ?? <></>}
      </InfiniteScroll>
    </S.Footer>
  );
}
