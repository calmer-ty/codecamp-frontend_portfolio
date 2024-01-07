// Types
import type { BoardDetailUIProps } from "./BoardDetail.types";
// Styles
import * as S from "./BoardDetail.styles";
// Utils
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI(props: BoardDetailUIProps): JSX.Element {
  console.log(props.likeScore);

  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <S.Header>
            <S.RowWrap>
              <S.Avatar src="/images/board/detail/ic_profile.png"></S.Avatar>
              <S.ColumnWrap>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.ColumnWrap>
            </S.RowWrap>
            <S.RowWrap>
              <S.OptBtn src="/images/board/detail/ic_link.png"></S.OptBtn>
              <S.AddressInfo
                title={`${
                  props.data?.fetchBoard?.boardAddress?.address ?? ""
                } ${props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""}`}
              >
                <S.OptBtn src="/images/board/detail/ic_location.png"></S.OptBtn>
              </S.AddressInfo>
            </S.RowWrap>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <img src="/images/board/detail/image.png" alt="" />
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            <S.Youtube
              url={props.data?.fetchBoard?.youtubeUrl ?? ""}
              width={486}
              height={240}
              muted
              playing
            />
            <S.LikeWrap>
              <S.LikeItem>
                <S.LikeIcon
                  onClick={props.onClickLikeScore}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>{props.likeScore}</S.LikeScore>
              </S.LikeItem>
              <S.LikeItem>
                <S.DislikeIcon
                  onClick={props.onClickDisLikeScore}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>{props.disLikeScore}</S.LikeScore>
              </S.LikeItem>
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
