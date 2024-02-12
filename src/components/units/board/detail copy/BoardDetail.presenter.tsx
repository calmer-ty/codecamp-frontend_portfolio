import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
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
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.ColWrap>
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
            <S.ImgWrap>
              {props.data?.fetchBoard.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.ImgItem
                    key={el}
                    src={`http://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImgWrap>
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
                  onClick={props.onClickLike}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>{props.data?.fetchBoard.likeCount}</S.LikeScore>
              </S.LikeItem>
              <S.LikeItem>
                <S.DislikeIcon
                  onClick={props.onClickDislike}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>{props.data?.fetchBoard.dislikeCount}</S.LikeScore>
              </S.LikeItem>
            </S.LikeWrap>
          </S.Body>
        </S.CardWrap>

        <S.MoveBtnWrap>
          <S.MoveBtn onClick={props.onClickMoveToPage("/boards")}>
            목록으로
          </S.MoveBtn>
          <S.MoveBtn
            onClick={props.onClickMoveToPage(
              `/boards/${props.data?.fetchBoard._id}/edit`
            )}
          >
            수정하기
          </S.MoveBtn>
          <S.MoveBtn onClick={props.onClickDeleteBoardDetail}>
            삭제하기
          </S.MoveBtn>
        </S.MoveBtnWrap>
      </S.Wrapper>
    </>
  );
}
