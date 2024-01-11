import type { BoardCommentWriteUIProps } from "./BoardCommentWrite.types";
// Styles
import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(
  props: BoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        {/* <S.Title>
          <S.TitleImg src="/images/boardComment/write/ic_logo.png" />
          댓글
        </S.Title> */}
        <S.InputWrap>
          <S.Writer
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
            readOnly={props.isEdit}
          ></S.Writer>
          <S.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          ></S.Password>
          <S.Like onChange={props.setRating} value={props.rating} />
        </S.InputWrap>
        <S.ContentsWrap>
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            // value={props.contents}
            value={
              props.contents !== "" ? props.contents : props.el?.contents ?? ""
            }
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          {/* <S.SubmitBtn onClick={props.onClickSubmit}>등록하기</S.SubmitBtn> */}
          <S.SubmitBtn onClick={props.isEdit === true ? props.onClick}>등록하기</S.SubmitBtn>
        </S.ContentsWrap>
      </S.Container>
    </S.Wrapper>
  );
}
