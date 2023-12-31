// TYPES
import type { BoardDetailUIProps } from "./BoardDetail.types";
// STYLES
import * as S from "./BoardDetail.styles";
// UTILS
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI(props: BoardDetailUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <S.Header>
            <S.RowWrap>
              <S.Avatar src="/images/ic_profile-56px.png"></S.Avatar>
              <S.ColumnWrap>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.ColumnWrap>
            </S.RowWrap>
            <S.RowWrap>
              <S.OptBtn src="/images/ic_link-32px.png"></S.OptBtn>
              <S.OptBtn src="/images/ic_location_on-32px.png"></S.OptBtn>
            </S.RowWrap>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <img src="/images/image.png" alt="" />
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            <S.Video></S.Video>
            <S.LikeWrap>
              <S.LikeBtn>
                <img src="/images/ic_like.png" alt="" width={20} />
                1920
              </S.LikeBtn>
              <S.LikeBtn>
                <img src="/images/ic_dislike.png" alt="" width={20} />
                768
              </S.LikeBtn>
            </S.LikeWrap>
          </S.Body>
        </S.CardWrap>

        <S.MoveBtnWrap>
          <S.MoveBtn onClick={props.onClickMoveToBoardList}>목록으로</S.MoveBtn>
          <S.MoveBtn onClick={props.onClickMoveToBoardEdit}>수정하기</S.MoveBtn>
          <S.MoveBtn onClick={props.onClickDeleteBoardDetail}>
            삭제하기
          </S.MoveBtn>
        </S.MoveBtnWrap>
      </S.Wrapper>
    </>
  );
}
