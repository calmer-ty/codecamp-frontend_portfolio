import UploadBtn01 from "../../../commons/uploadBtn01/UploadBtn01.container";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Container onSubmit={props.handleSubmit(props.onSubmitHandler)}>
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.RowWrap>
            <S.ColWrap>
              <S.Label>작성자</S.Label>
              <S.Writer
                type="text"
                placeholder="이름을 작성해주세요."
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                readOnly={Boolean(props.data?.fetchBoard.writer)}
                {...props.register("writer", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.writer?.message}</S.Error>
            </S.ColWrap>
            <S.ColWrap>
              <S.Label>비밀번호</S.Label>
              <S.Password
                type="password"
                placeholder="비밀번호를 작성해주세요."
                {...props.register("password", {
                  required: props.isEdit ? "" : "This is required.",
                  minLength: {
                    value: 4,
                    message: "Min Length is 4",
                  },
                  maxLength: {
                    value: 16,
                    message: "Min Length is 16",
                  },
                })}
              />
              <S.Error>{props.errors?.password?.message}</S.Error>
            </S.ColWrap>
          </S.RowWrap>

          <S.ColWrap>
            <S.Label>제목</S.Label>
            <S.Subject
              type="text"
              placeholder="제목을 작성해주세요."
              defaultValue={props.data?.fetchBoard.title}
              {...props.register("title", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Error>{props.errors?.title?.message}</S.Error>
          </S.ColWrap>

          <S.ColWrap>
            <S.Label>내용</S.Label>
            <S.Contents
              placeholder="내용을 작성해주세요."
              defaultValue={props.data?.fetchBoard.contents}
              {...props.register("contents", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Error>{props.errors?.contents?.message}</S.Error>
          </S.ColWrap>

          <S.ColWrap>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrap>
              <S.Zipcode
                readOnly
                value={
                  props.zipcode !== ""
                    ? props.zipcode
                    : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
                }
                {...props.register("zipcode", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.SearchBtn onClick={props.onClickAddressSearch}>
                우편번호 검색
              </S.SearchBtn>
            </S.ZipcodeWrap>
            <S.Address
              readOnly
              defaultValue={
                // 주소 값이 비어있지 않다면 = 즉 주소 값이 있다면 새로 받아진 주소 값을 넣어줌.
                // 그렇지 않다면 패치한 값, 가지고 있던 주소 값을 넣어준다.
                props.address !== ""
                  ? props.address
                  : props.data?.fetchBoard.boardAddress?.address ?? ""
              }
              {...props.register("address", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Address
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
              {...props.register("addressDetail", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
          </S.ColWrap>

          <S.ColWrap>
            <S.Label>유튜브</S.Label>
            <S.Youtube
              type="text"
              placeholder="링크를 복사해주세요."
              defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
              {...props.register("youtubeUrl", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
          </S.ColWrap>

          <S.ColWrap>
            <S.Label>사진 첨부</S.Label>
            <S.ImgWrap>
              {new Array(3).fill(1).map((data, index) => (
                <UploadBtn01
                  key={`${data}_${index}`}
                  index={index}
                  onChangeFiles={props.onChangeFiles}
                  fileUrls={props.fileUrls}
                />
              ))}
            </S.ImgWrap>
          </S.ColWrap>

          <S.ColWrap>
            <S.Label>메인 설정</S.Label>
            <S.RadioWrap>
              <S.RadioBtn
                type="radio"
                {...props.register("mainSetting", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.RadioLabel>유튜브</S.RadioLabel>
              <S.RadioBtn
                type="radio"
                {...props.register("mainSetting", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.RadioLabel>사진</S.RadioLabel>
            </S.RadioWrap>
          </S.ColWrap>

          <S.SubmitBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitBtn>
        </S.Container>

        {props.isOpen && (
          <S.AddressModal
            open={props.isOpen}
            onOk={props.onClickAddressSearch}
            onCancel={props.onClickAddressSearch}
          >
            <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
          </S.AddressModal>
        )}
      </S.Wrapper>
    </>
  );
}
