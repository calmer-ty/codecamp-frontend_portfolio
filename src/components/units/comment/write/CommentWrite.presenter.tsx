import * as S from "./CommentWrite.styles";
import type { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(
  props: ICommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        {props.isEdit === false && (
          <S.Title>
            <S.TitleImage src="/images/comment/write/ic_logo.png" />
            댓글
          </S.Title>
        )}
        <S.RowWrapper>
          <S.InfoInput
            type="text"
            id="writer"
            onChange={props.onChangeInputs}
            placeholder="작성자"
            value={props.inputs.writer}
          />
          <S.InfoInput
            type="password"
            id="password"
            onChange={props.onChangeInputs}
            placeholder="비밀번호"
            value={props.inputs.password}
          />
          <S.RateScore onChange={props.setRating} value={props.rating} />
        </S.RowWrapper>
        <S.ContentsWrapper>
          <S.Contents
            id="contents"
            maxLength={100}
            onChange={props.onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={props.contents}
          />
          <S.ContentsBottom>
            <S.ContentsLength>
              {props.contents !== "" ? props.contents.length : 0}/100
            </S.ContentsLength>
            <S.ButtonWrapper>
              {props.isEdit === true ? (
                <S.CancelButton onClick={props.onClickUpdateCancel}>
                  수정취소
                </S.CancelButton>
              ) : (
                ""
              )}
              <S.SubmitButton
                onClick={
                  props.isEdit === true
                    ? props.onClickUpdate
                    : props.onClickWrite
                }
              >
                {props.isEdit === true ? "수정하기" : "등록하기"}
              </S.SubmitButton>
            </S.ButtonWrapper>
          </S.ContentsBottom>
        </S.ContentsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
