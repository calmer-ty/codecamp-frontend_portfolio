import * as S from "./BoardDetailBody.styles";

import { useBoardLike } from "../../../../commons/hooks/customs/board/useBoardLike";
import type { IBoardDetailProps } from "../BoardDetail.types";

export default function BoardDetailBody(props: IBoardDetailProps): JSX.Element {
  const { onClickLike, onClickDislike } = useBoardLike();

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
    </S.Body>
  );
}
