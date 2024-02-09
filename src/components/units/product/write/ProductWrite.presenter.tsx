import Label01 from "../../../commons/labels/01";
import Upload01 from "../../../commons/uploads/01/Upload01.index";
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
            <S.FlexColumn>
              <Label01 text="상품명" />
              <S.ProductInput
                type="text"
                placeholder="상품명을 작성해주세요."
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                readOnly={Boolean(props.data?.fetchBoard.writer)}
                {...props.register("name", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.name?.message}</S.Error>
            </S.FlexColumn>
            <S.FlexColumn>
              <Label01 text="한줄요약" />
              <S.ProductInput
                type="text"
                placeholder="상품을 대한 내용을 한줄로 요약해주세요."
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
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="상품설명" />
              <S.ProductInput
                type="text"
                placeholder="상품을 설명해주세요."
                defaultValue={props.data?.fetchBoard.title}
                {...props.register("contents", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.contents?.message}</S.Error>
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="판매가격" />
              <S.ProductInput
                type="text"
                placeholder="판매 가격을 입력해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                {...props.register("price", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.price?.message}</S.Error>
            </S.FlexColumn>

            <S.FlexColumn>
              <Label01 text="태그입력" />
              <S.ProductInput
                placeholder="내용을 작성해주세요."
                defaultValue={props.data?.fetchBoard.contents}
                {...props.register("tags", {
                  required: props.isEdit ? "" : "This is required.",
                })}
              />
              <S.Error>{props.errors?.tags?.message}</S.Error>
            </S.FlexColumn>

            <S.FlexRow>
              <S.FlexColumn style={{ width: "40%" }}>
                <Label01 text="거래위치" />
                <div>Map</div>
              </S.FlexColumn>
              <S.FlexColumn style={{ width: "60%" }}>
                <S.FlexColumn>
                  <S.Label>GPS</S.Label>
                  <S.FlexRow>
                    <input type="text" />
                    <input type="text" />
                  </S.FlexRow>
                </S.FlexColumn>
                <S.FlexColumn>
                  <Label01 text="주소" />
                  <S.Address
                    readOnly
                    defaultValue={
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
                </S.FlexColumn>
              </S.FlexColumn>
            </S.FlexRow>

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
              <Label01 text="메인사진 설정" />
              <S.FlexRow>
                <S.RadioBtn
                  type="radio"
                  {...props.register("mainSetting", {
                    required: props.isEdit ? "" : "This is required.",
                  })}
                />
                <S.RadioLabel>사진1</S.RadioLabel>
                <S.RadioBtn
                  type="radio"
                  {...props.register("mainSetting", {
                    required: props.isEdit ? "" : "This is required.",
                  })}
                />
                <S.RadioLabel>사진2</S.RadioLabel>
              </S.FlexRow>
            </S.FlexColumn>

            <S.SubmitBtn
              // onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              onClick={props.onClickSubmit}
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
