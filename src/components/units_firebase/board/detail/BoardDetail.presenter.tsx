import * as S from "../../../../components/units/board/detail/BoardDetail.styles";
// import { getDate } from "../../../../commons/libraries/utils";
import type { BoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: BoardDetailUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <S.Header>
            <S.RowWrap>
              <S.Avatar src="/images/board/detail/ic_profile.png"></S.Avatar>
              <S.ColWrap>
                {/* <S.Writer>{props.boardsData.writer}</S.Writer> */}
                <S.CreatedAt>
                  {/* {getDate(props.boardsData.createdAt)} */}
                </S.CreatedAt>
              </S.ColWrap>
            </S.RowWrap>
            <S.RowWrap>
              <S.OptBtn src="/images/board/detail/ic_link.png"></S.OptBtn>
              <S.AddressInfo
              // title={`${props.boardsData.boardAddress?.address ?? ""} ${
              //   props.boardsData.boardAddress?.addressDetail ?? ""
              // }`}
              >
                <S.OptBtn src="/images/board/detail/ic_location.png"></S.OptBtn>
              </S.AddressInfo>
            </S.RowWrap>
          </S.Header>
          <S.Body>
            {/* <S.Title>{props.boardsData.title}</S.Title> */}
            <img src="/images/board/detail/image.png" alt="" />
            {/* <S.Contents>{props.boardsData.contents}</S.Contents> */}
            <S.Youtube
              // url={props.boardsData.youtubeUrl ?? ""}
              width={486}
              height={240}
              muted
              playing
            />
            <S.LikeWrap>
              <S.LikeItem>
                <S.LikeIcon
                  // onClick={props.onClickLikeScore}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>추후제공</S.LikeScore>
              </S.LikeItem>
              <S.LikeItem>
                <S.DislikeIcon
                  // onClick={props.onClickDisLikeScore}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>추후제공</S.LikeScore>
              </S.LikeItem>
            </S.LikeWrap>
          </S.Body>
        </S.CardWrap>

        <S.MoveBtnWrap>
          <S.MoveBtn onClick={props.onClickMoveToBoardList}>목록으로</S.MoveBtn>
          <S.MoveBtn>수정하기</S.MoveBtn>
          <S.MoveBtn>삭제하기</S.MoveBtn>
        </S.MoveBtnWrap>
      </S.Wrapper>
    </>
  );
}
