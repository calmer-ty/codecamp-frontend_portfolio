import * as S from "./MarketWrite.styles";
import type { IMarketWriteUIProps } from "./MarketWrite.types";

import Upload01 from "../../../commons/uploads/01/Upload01.index";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/01";
import Error01 from "../../../commons/element/errors/01";
import Button01 from "../../../commons/element/buttons/01";

export default function MarketWriteUI(props: IMarketWriteUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
        <S.Form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdate : props.onClickSubmit
          )}
        >
          <S.FlexColumn>
            <Label01 text="상품명" />
            <Input01
              placeholder="상품명을 작성해주세요."
              register={props.register("name")}
            />
            <Error01 text={props.formState.errors?.name?.message} />
          </S.FlexColumn>
          <S.FlexColumn>
            <Label01 text="한줄요약" />
            <Input01
              placeholder="상품 한줄요약을 작성해주세요."
              register={props.register("remarks")}
            />
            <Error01 text={props.formState.errors?.remarks?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="상품설명" />
            <S.Textarea
              placeholder="상품설명을 작성해주세요."
              {...props.register("contents")}
            />
            <Error01 text={props.formState.errors?.contents?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="판매 가격" />
            <Input01
              placeholder="상품가격을 작성해주세요."
              register={props.register("price")}
            />
            <Error01 text={props.formState.errors?.price?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="태그입력" />
            <Input01
              placeholder="#태그  #태그  #태그"
              register={props.register("tags")}
            />
            <S.Error>{props.formState.errors?.tags?.message}</S.Error>
          </S.FlexColumn>

          <S.FlexRow>
            <S.FlexColumn style={{ width: "40%" }}>
              <Label01 text="거래위치" />
              <div>Map</div>
            </S.FlexColumn>
            <S.FlexColumn style={{ width: "60%", rowGap: "20px" }}>
              <S.FlexColumn>
                <S.Label>GPS</S.Label>
                <S.FlexRow>
                  <S.Input type="text" />
                  <S.SearchBtn
                    type="button"
                    onClick={props.onClickAddressSearch}
                  >
                    우편번호 검색
                  </S.SearchBtn>
                  <S.Input type="text" />
                </S.FlexRow>
              </S.FlexColumn>
              <S.FlexColumn>
                <Label01 text="주소" />
                <S.FlexColumn style={{ rowGap: "20px" }}>
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
                    readOnly
                    register={props.register("addressDetail")}
                  />
                </S.FlexColumn>
              </S.FlexColumn>
            </S.FlexColumn>
          </S.FlexRow>

          <S.FlexColumn>
            <Label01 text="사진첨부" />
            <S.ImgWrap>
              {props.fileUrls.map((el, index) => (
                <Upload01
                  key={`${el}_${index}`}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </S.ImgWrap>
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="메인사진 설정" />
            <S.FlexRow>
              <S.RadioBtn type="radio" {...props.register("mainSetting")} />
              <S.RadioLabel>사진1</S.RadioLabel>
              <S.RadioBtn type="radio" {...props.register("mainSetting")} />
              <S.RadioLabel>사진2</S.RadioLabel>
            </S.FlexRow>
          </S.FlexColumn>

          <Button01
            text={props.isEdit ? "수정하기" : "등록하기"}
            isActive={props.formState.isValid}
          />
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
  );
}
