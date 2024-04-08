import { memo } from "react";
import Link from "next/link";

import { useBoard } from "../../../../commons/hooks/customs/board/useBoard";
import { useBoardLike } from "../../../../commons/hooks/customs/board/useBoardLike";

import type { IBoardDetailProps } from "../BoardDetail.types";
import * as S from "./BoardDetailBody.styles";

function BoardDetailBody(props: IBoardDetailProps): JSX.Element {
  console.log(props);
  const { onClickLike, onClickDislike } = useBoardLike();
  const { onClickDelete } = useBoard();

  return (
    <S.Body>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <>{props.data?.fetchBoard.images?.filter((el) => el).map((el) => <S.ImgItem key={el} src={`http://storage.googleapis.com/${el}`} />)}</>
      <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
      <S.Youtube url={props.data?.fetchBoard?.youtubeUrl ?? ""} width={486} height={240} muted playing />
      <S.LikeWrap>
        <S.LikeItem>
          <S.LikeIcon onClick={onClickLike} style={{ fontSize: "30px", cursor: "pointer" }} />
          <S.LikeScore>{props.data?.fetchBoard.likeCount}</S.LikeScore>
        </S.LikeItem>
        <S.LikeItem>
          <S.DislikeIcon onClick={onClickDislike} style={{ fontSize: "30px", cursor: "pointer" }} />
          <S.LikeScore>{props.data?.fetchBoard.dislikeCount}</S.LikeScore>
        </S.LikeItem>
      </S.LikeWrap>
      <S.LinkWrap>
        <Link href={"/boards"}>
          <S.LinkBtn>목록으로</S.LinkBtn>
        </Link>
        <Link href={`/boards/${props.data?.fetchBoard._id}/edit`}>
          <S.LinkBtn>수정하기</S.LinkBtn>
        </Link>
        <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
      </S.LinkWrap>
    </S.Body>
  );
}
export default memo(BoardDetailBody);
