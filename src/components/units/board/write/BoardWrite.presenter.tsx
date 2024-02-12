import Button01 from "../../../commons/element/buttons/01";
import Error01 from "../../../commons/element/errors/01";
import Input01 from "../../../commons/element/inputs/01";
import Label01 from "../../../commons/element/labels/01";
import Upload01 from "../../../commons/uploads/01/Upload01.index";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.Form
            onSubmit={props.handleSubmit(
              props.isEdit ? props.onClickUpdate : props.onClickSubmit
            )}
          >
            <S.FlexRow>
              <S.InputWrap>
                <Label01 text="작성자" />
                <Input01
                  placeholder="이름을 작성해주세요."
                  defaultValue={props.data?.fetchBoard.writer ?? ""}
                  register={props.register("writer")}
                  readOnly={props.isEdit}
                />
                <Error01 text={props.formState.errors?.writer?.message} />
              </S.InputWrap>
              <S.InputWrap>
                <Label01 text="비밀번호" />
                <Input01
                  placeholder="비밀번호를 작성해주세요."
                  register={props.register("password")}
                />
                <Error01 text={props.formState.errors?.password?.message} />
              </S.InputWrap>
            </S.FlexRow>

            <S.FlexColumn>
              <Label01 text="제목" />
              <Input01
                placeholder="제목을 작성해주세요."
                defaultValue={props.data?.fetchBoard.title ?? ""}
                register={props.register("title")}
              />
              <Error01 text={props.formState.errors?.title?.message} />
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="내용" />
              <S.Contents
                placeholder="내용을 작성해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                {...props.register("contents")}
              />
              <Error01 text={props.formState.errors?.contents?.message} />
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="주소" />
              <S.AddressWrap>
                <S.FlexRow
                  style={{ justifyContent: "flex-start", columnGap: "20px" }}
                >
                  <S.Zipcode
                    readOnly
                    value={
                      props.zipcode !== ""
                        ? props.zipcode
                        : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
                    }
                    {...props.register("zipcode")}
                  />
                  <S.SearchBtn onClick={props.onClickAddressSearch}>
                    우편번호 검색
                  </S.SearchBtn>
                </S.FlexRow>
                <S.Input
                  value={
                    props.address !== ""
                      ? props.address
                      : props.data?.fetchBoard.boardAddress?.address ?? ""
                  }
                  readOnly
                  {...props.register("address")}
                />
                <Input01
                  defaultValue={
                    props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }
                  register={props.register("addressDetail")}
                />
              </S.AddressWrap>
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="유튜브" />
              <Input01
                placeholder="링크를 복사해주세요."
                defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
                register={props.register("youtubeUrl")}
              />
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="사진첨부" />
              <S.ImgWrap>
                {props.fileUrls.map((el, index) => {
                  return (
                    <Upload01
                      key={`${el}_${index}`}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                  );
                })}
              </S.ImgWrap>
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="메인설정" />
              <S.RadioWrap>
                <S.RadioBtn type="radio" {...props.register("mainSetting")} />
                <S.RadioLabel>유튜브</S.RadioLabel>
                <S.RadioBtn type="radio" {...props.register("mainSetting")} />
                <S.RadioLabel>사진</S.RadioLabel>
              </S.RadioWrap>
            </S.FlexColumn>

            <Button01
              isActive={props.formState.isValid}
              text={props.isEdit ? "수정하기" : "등록하기"}
            />
          </S.Form>
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
