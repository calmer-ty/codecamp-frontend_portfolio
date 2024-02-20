import * as S from "./BoardDetailBody.styles";

import { useBoard } from "../../../../commons/hooks/customs/useBoard";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useBoardRate } from "../../../../commons/hooks/customs/useBoardRate";

import type { IBoardDetailProps } from "../BoardDetail.types";

export default function BoardDetailBody(props: IBoardDetailProps): JSX.Element {
  const { onClickLike, onClickDislike } = useBoardRate();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDelete } = useBoard();

  return (
    <S.Body>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <S.ImgWrap>
        {props.data?.fetchBoard.images
          ?.filter((el) => el)
          .map((el) => <S.ImgItem key={el} src={`http://storage.googleapis.com/${el}`} />)}
      </S.ImgWrap>
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
      <S.BtnWrap>
        <S.MoveBtn onClick={onClickMoveToPage("/boards")}>목록으로</S.MoveBtn>
        <S.MoveBtn onClick={onClickMoveToPage(`/boards/${props.data?.fetchBoard._id}/edit`)}>수정하기</S.MoveBtn>
        <S.MoveBtn onClick={onClickDelete}>삭제하기</S.MoveBtn>
      </S.BtnWrap>
    </S.Body>
  );
}
