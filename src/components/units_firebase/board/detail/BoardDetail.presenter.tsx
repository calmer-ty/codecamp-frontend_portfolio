import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <>
      {" "}
      {props.isOpenDeleteModal && (
        <S.DeleteModal
          visible={true}
          onOk={props.onClickDeleteBoard}
          onCancel={props.onToggleDeleteModal}
        >
          <span>비밀번호 입력: </span>
          <input type="password" onChange={props.onChangePassword} />
        </S.DeleteModal>
      )}
      <S.Wrapper>
        <S.CardWrap>
          <S.Header>
            <S.RowWrap>
              <S.Avatar src="/images/board/detail/ic_profile.png"></S.Avatar>
              <S.ColWrap>
                <S.Writer>{props.docData?.writer}</S.Writer>
                <S.CreatedAt>{getDate(props.docData?.createdAt)}</S.CreatedAt>
              </S.ColWrap>
            </S.RowWrap>
            <S.RowWrap>
              <S.OptBtn src="/images/board/detail/ic_link.png"></S.OptBtn>
              <S.AddressInfo
                title={`${props.docData?.addressInput?.address ?? ""} ${
                  props.docData?.addressInput?.addressDetail ?? ""
                }`}
              >
                <S.OptBtn src="/images/board/detail/ic_location.png"></S.OptBtn>
              </S.AddressInfo>
            </S.RowWrap>
          </S.Header>
          <S.Body>
            <S.Title>{props.docData?.title}</S.Title>
            <img src="/images/board/detail/image.png" alt="" />
            <S.Contents>{props.docData?.contents}</S.Contents>
            <S.Youtube
              url={props.docData?.youtubeUrl ?? ""}
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
          <S.MoveBtn onClick={props.onClickMoveToList}>목록으로</S.MoveBtn>
          <S.MoveBtn onClick={props.onClickMoveToEdit}>수정하기</S.MoveBtn>
          <S.MoveBtn onClick={props.onToggleDeleteModal}>삭제하기</S.MoveBtn>
        </S.MoveBtnWrap>
      </S.Wrapper>
    </>
  );
}
