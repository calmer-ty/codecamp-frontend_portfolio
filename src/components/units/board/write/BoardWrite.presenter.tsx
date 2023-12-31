import * as S from "./BoardWrite.styles";

// TYPES
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Container
          // data >> 타입을 모르겠음
          // onSubmit={handleSubmit((data: any) => console.log(data))}
          onSubmit={props.handleSubmit(props.onSubmitHandler)}
        >
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.RowWrap>
            <S.ColumnWrap>
              <S.Label>작성자</S.Label>
              <S.Writer
                type="text"
                placeholder="이름을 작성해주세요."
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                readOnly={!!props.data?.fetchBoard.writer}
                {...props.register("writer", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.writer?.message}</S.Error>
            </S.ColumnWrap>
            <S.ColumnWrap>
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
            </S.ColumnWrap>
          </S.RowWrap>

          <S.ColumnWrap>
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
          </S.ColumnWrap>

          <S.ColumnWrap>
            <S.Label>내용</S.Label>
            <S.Contents
              placeholder="내용을 작성해주세요."
              defaultValue={props.data?.fetchBoard.contents}
              {...props.register("contents", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Error>{props.errors?.contents?.message}</S.Error>
          </S.ColumnWrap>

          <S.ColumnWrap>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrap>
              <S.Zipcode placeholder="07250" />
              <S.ZipcodeSearchBtn>우편번호 검색</S.ZipcodeSearchBtn>
            </S.ZipcodeWrap>
            <S.Address
              {...props.register("address1", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Error>{props.errors?.address1?.message}</S.Error>
            <S.Address
              {...props.register("address2", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Error>{props.errors?.address2?.message}</S.Error>
          </S.ColumnWrap>

          <S.ColumnWrap>
            <S.Label>유튜브</S.Label>
            <S.Youtube
              type="text"
              placeholder="링크를 복사해주세요."
              defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
              {...props.register("youtubeUrl", {
                required: props.isEdit ? "" : "This is required.",
              })}
            />
            <S.Error>{props.errors?.youtubeUrl?.message}</S.Error>
          </S.ColumnWrap>

          <S.ColumnWrap>
            <S.Label>사진 첨부</S.Label>
            <S.ImgWrap>
              <S.UploadBtn>+</S.UploadBtn>
              <S.UploadBtn>+</S.UploadBtn>
              <S.UploadBtn>+</S.UploadBtn>
            </S.ImgWrap>
          </S.ColumnWrap>

          <S.ColumnWrap>
            <S.Label>메인 설정</S.Label>
            <S.RadioWrap>
              <S.RadioBtn
                type="radio"
                // name="main-setting"
                {...props.register("mainSetting", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.RadioLabel>유튜브</S.RadioLabel>
              <S.RadioBtn
                type="radio"
                // name="main-setting"
                {...props.register("mainSetting", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.RadioLabel>사진</S.RadioLabel>
            </S.RadioWrap>
            <S.Error>{props.errors?.mainSetting?.message}</S.Error>
          </S.ColumnWrap>

          <S.WriteBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.WriteBtn>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
