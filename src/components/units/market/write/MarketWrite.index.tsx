import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./MarketWrite.styles";

import Upload01 from "../../../commons/uploads/01/Upload01.index";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/01";
import Error01 from "../../../commons/element/errors/01";
import Button01 from "../../../commons/element/buttons/01";

// Custom Hooks
import { useMarket } from "../../../commons/hooks/customs/useMarket";
import { useAddressSearch } from "../../../commons/hooks/customs/useAddressSearch";
import { useFileUrls } from "../../../commons/hooks/customs/useFileUrls";
// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";

import type { IFormData, IMarketWriteProps } from "./MarketWrite.types";

export default function MarketWriteUI(props: IMarketWriteProps): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaProductWrite),
    mode: "onChange",
  });

  const { isOpen, zipcode, address, onClickAddressSearch, onCompleteAddressSearch } = useAddressSearch();
  const { fileUrls, setFileUrls, onChangeFileUrls } = useFileUrls();

  const { onClickCreate, onClickUpdate } = useMarket(fileUrls, zipcode, address);

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
        <S.Form onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickCreate)}>
          <S.FlexColumn>
            <Label01 text="상품명" />
            <Input01
              placeholder="상품명을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.name ?? ""}
              register={register("name")}
            />
            <Error01 text={formState.errors?.name?.message} />
          </S.FlexColumn>
          <S.FlexColumn>
            <Label01 text="한줄요약" />
            <Input01
              placeholder="상품 한줄요약을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.remarks ?? ""}
              register={register("remarks")}
            />
            <Error01 text={formState.errors?.remarks?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="상품설명" />
            <S.Textarea
              placeholder="상품설명을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.contents ?? ""}
              {...register("contents")}
            />
            <Error01 text={formState.errors?.contents?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="판매 가격" />
            <Input01
              placeholder="상품가격을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.price ?? ""}
              register={register("price")}
            />
            <Error01 text={formState.errors?.price?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="태그입력" />
            <Input01 placeholder="#태그  #태그  #태그" register={register("tags")} />
            <S.Error>{formState.errors?.tags?.message}</S.Error>
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
                  <S.SearchBtn type="button" onClick={onClickAddressSearch}>
                    우편번호 검색
                  </S.SearchBtn>
                  <S.Input type="text" />
                </S.FlexRow>
              </S.FlexColumn>
              <S.FlexColumn>
                <Label01 text="주소" />
                <S.FlexColumn style={{ rowGap: "20px" }}>
                  <S.Input
                    value={address !== "" ? address : props.data?.fetchUseditem.useditemAddress?.address ?? ""}
                    readOnly
                    {...register("address")}
                  />
                  <Input01 readOnly register={register("addressDetail")} />
                </S.FlexColumn>
              </S.FlexColumn>
            </S.FlexColumn>
          </S.FlexRow>

          <S.FlexColumn>
            <Label01 text="사진첨부" />
            <S.ImgWrap>
              {fileUrls.map((el, index) => (
                <Upload01 key={`${el}_${index}`} index={index} fileUrl={el} onChangeFileUrls={onChangeFileUrls} />
              ))}
            </S.ImgWrap>
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="메인사진 설정" />
            <S.FlexRow>
              {/* <S.RadioBtn type="radio" {...register("mainSetting")} /> */}
              <S.RadioLabel>사진1</S.RadioLabel>
              {/* <S.RadioBtn type="radio" {...register("mainSetting")} /> */}
              <S.RadioLabel>사진2</S.RadioLabel>
            </S.FlexRow>
          </S.FlexColumn>

          <Button01 text={props.isEdit ? "수정하기" : "등록하기"} isActive={formState.isValid} />
        </S.Form>
      </S.Container>

      {isOpen !== undefined && (
        <S.AddressModal open={isOpen} onOk={onClickAddressSearch} onCancel={onClickAddressSearch}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
    </S.Wrapper>
  );
}
