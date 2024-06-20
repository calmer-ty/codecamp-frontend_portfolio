import { useBoard } from "../../../../commons/hooks/customs/board/useBoard";
import { useBoardLike } from "../../../../commons/hooks/customs/board/useBoardLike";
import { isValidURL } from "../../../../../commons/libraries/validation";

import type { IBoardDetailProps } from "../BoardDetail.types";
import * as S from "./BoardDetailBody.styles";
import LinkButton02 from "../../../../commons/element/buttons/link/02";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BoardDetailBody(props: IBoardDetailProps): JSX.Element {
  const { onClickLike, onClickDislike } = useBoardLike();
  const { onClickDelete } = useBoard();

  return (
    <S.Body>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <S.CustomSlider {...settings}>{props.data?.fetchBoard.images?.filter((el) => el).map((el, index) => <S.ImgItem key={index} src={`http://storage.googleapis.com/${el}`} />)}</S.CustomSlider>
      <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
      {isValidURL(props.data?.fetchBoard?.youtubeUrl ?? "") && <S.Youtube url={props.data?.fetchBoard?.youtubeUrl ?? ""} muted playing />}
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
      <S.ButtonWrap>
        <LinkButton02 text="목록으로" href="/boards" />
        <LinkButton02 text="수정하기" href={`/boards/${props.data?.fetchBoard._id}/edit`} />
        <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
      </S.ButtonWrap>
    </S.Body>
  );
}
