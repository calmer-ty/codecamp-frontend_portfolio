import Upload01 from "../../../commons/uploads/01/Upload01.container";
import * as S from "./ProductWrite.styles";
import type { IProductWriteUIProps, IFormInputs } from "./ProductWrite.types";

export default function ProductWriteUI(
  props: IProductWriteUIProps
): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
          <S.Form
            onSubmit={props.handleSubmit((data: IFormInputs): void => {
              console.log(data);
            })}
          >
            <S.ColWrap>
              <S.Label>상품명</S.Label>
              <S.ProductInput
                type="text"
                placeholder="이름을 작성해주세요."
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                readOnly={Boolean(props.data?.fetchBoard.writer)}
                {...props.register("name", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.name?.message}</S.Error>
            </S.ColWrap>
            <S.ColWrap>
              <S.Label>상품 한줄요약</S.Label>
              <S.ProductInput
                type="password"
                placeholder="비밀번호를 작성해주세요."
                {...props.register("remarks", {
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
              <S.Error>{props.errors?.remarks?.message}</S.Error>
            </S.ColWrap>

            <S.ColWrap>
              <S.Label>상품설명</S.Label>
              <S.ProductInput
                type="text"
                placeholder="제목을 작성해주세요."
                defaultValue={props.data?.fetchBoard.title}
                {...props.register("contents", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.contents?.message}</S.Error>
            </S.ColWrap>

            <S.ColWrap>
              <S.Label>판매가격</S.Label>
              <S.ProductInput
                placeholder="내용을 작성해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                {...props.register("price", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.price?.message}</S.Error>
            </S.ColWrap>

            <S.ColWrap>
              <S.Label>태그입력</S.Label>
              <S.ProductInput
                placeholder="내용을 작성해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                {...props.register("tags", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.tags?.message}</S.Error>
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
              <S.Label>사진 첨부</S.Label>
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
            </S.ColWrap>

            {/* <S.ColWrap>
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
            </S.ColWrap> */}

            <S.SubmitBtn
              // onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              isActive={props.isEdit ? true : props.isActive}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.SubmitBtn>
          </S.Form>
        </S.Container>

        {props.isOpen !== undefined && (
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
