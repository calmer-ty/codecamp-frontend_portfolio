// Types
import type { BoardDetailUIProps } from "./BoardDetail.types";
// Styles
import * as S from "./BoardDetail.styles";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
// Utils
import { getDate } from "../../../../commons/libraries/utils";
// Library
import { Modal } from "antd";

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
            <S.Youtube
              url={props.data?.fetchBoard?.youtubeUrl ?? ""}
              width={800}
              height={600}
              muted
              playing
            />
            <S.LikeWrap>
              <S.LikeItem>
                <LikeOutlined
                  onClick={props.onClickLikeScore}
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
                <S.LikeScore>{props.likeScore}</S.LikeScore>
              </S.LikeItem>
              <S.LikeItem>
                <DislikeOutlined
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

        <Modal
          title="시스템에 문제가 있습니다"
          open={props.isModalOpen}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        ></Modal>
      </S.Wrapper>
    </>
  );
}
