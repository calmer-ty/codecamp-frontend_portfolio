import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useProduct } from "../../../commons/hooks/customs/product/useProduct";
import { useMap } from "../../../commons/hooks/customs/useMap";

import Upload01 from "../../../commons/element/uploads/01";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/01";
import Error01 from "../../../commons/element/errors/01";
import Button01 from "../../../commons/element/buttons/01";
import TagsWrite01 from "../../../commons/element/tags/write/01";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";
import type { IFormDataProductWrite, IProductWriteProps } from "./ProductWrite.types";
import * as S from "./ProductWrite.styles";

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  // prettier-ignore
  const { register, handleSubmit, setValue, trigger, formState: { errors, isValid } } 
  = useForm<IFormDataProductWrite>({ resolver: yupResolver(schemaProductWrite), mode: "onChange"});

  // 맵 선택 Hook
  const lat = props.data?.fetchUseditem.useditemAddress?.lat;
  const lng = props.data?.fetchUseditem.useditemAddress?.lng;
  const { latlng, address } = useMap(lat ?? 33.450701, lng ?? 126.570667, true);
  // 맵 클릭 이벤트 핸들러
  useEffect(() => {
    if (typeof address !== "string") return;
    setValue("address", address);
    void trigger("address");
  }, [address]);

  // 상품 설명 이벤트
  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  // 초기 값 설정 및 유효성 검사
  useEffect(() => {
    const itemData = {
      name: props.data?.fetchUseditem.name ?? "",
      remarks: props.data?.fetchUseditem.remarks ?? "",
      contents: props.data?.fetchUseditem.contents ?? "",
      lat: props.data?.fetchUseditem.useditemAddress?.lat ?? 0,
      lng: props.data?.fetchUseditem.useditemAddress?.lng ?? 0,
      address: props.data?.fetchUseditem.useditemAddress?.address ?? "",
      price: props.data?.fetchUseditem.price ?? "",
    };
    // 객체의 각 키-값 쌍에 대해 setValue를 호출
    Object.entries(itemData).forEach(([key, value]) => {
      setValue(key as "name" | "remarks" | "contents" | "price" | "tags" | "address" | "lat" | "lng" | "images" | "address" | `tags.${number}` | `images.${number}`, value, {
        shouldValidate: true,
      });
    });
    void trigger();
  }, [setValue, props.data?.fetchUseditem, trigger]);

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  // 파일 전송 기능
  const [files, setFiles] = useState<File[]>(new Array(3).fill(null));
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const onChangeFileUrls = (fileUrl: string, index: number, file: File | undefined): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);

    if (file === undefined) return;
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    console.log(fileUrl);
  };

  // Tags
  const tags: string[] = [];
  const { props: tagProps } = TagsWrite01(tags);
  tagProps.children[0].forEach((el: React.ReactElement) => {
    if (typeof el.key !== "string") return;
    tags.push(el.key);
  });

  // 상품 뮤테이션 Hook
  const { onClickCreate, onClickUpdate } = useProduct({
    _id: props.data?.fetchUseditem._id,
    files,
    fileUrls,
    latlng,
    address,
    tags,
  });

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
        <S.Form onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickCreate)}>
          <S.InputWrap>
            <Label01 text="상품명" />
            <Input01 placeholder="상품명을 작성해주세요." defaultValue={props.data?.fetchUseditem.name} register={register("name")} />
            <Error01 text={errors.name?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="한줄요약" />
            <Input01 placeholder="상품 한줄요약을 작성해주세요." defaultValue={props.data?.fetchUseditem.remarks} register={register("remarks")} />
            <Error01 text={errors.remarks?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="상품설명" />
            <S.Contents placeholder="상품설명을 작성해주세요." defaultValue={props.data?.fetchUseditem.contents} onChange={onChangeContents} />
            <Error01 text={errors.contents?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="판매 가격" />
            <Input01 placeholder="0" defaultValue={props.data?.fetchUseditem.price ?? ""} register={register("price")} />
            <Error01 text={errors.price?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="태그입력" />
            <S.Tags>
              {tagProps.children.map((el: string, index: number) => (
                <span key={`${el}_${index}`}>{el}</span>
              ))}
            </S.Tags>
            <Error01 text={errors.tags?.message} />
          </S.InputWrap>

          <S.AreaWrap>
            <S.Map>
              <Label01 text="거래위치" />
              <div id="map" style={{ width: "100%", height: "100%" }}></div>
            </S.Map>
            <S.MapInfo>
              <S.InputWrap>
                <Label01 text="위도/경도" />
                <S.FlexRow style={{ columnGap: "20px" }}>
                  <S.LatLng type="number" value={latlng !== "" ? latlng?.Ma : props.data?.fetchUseditem.useditemAddress?.lat ?? ""} readOnly {...register("lat")} />
                  <S.LatLng type="number" value={latlng !== "" ? latlng?.La : props.data?.fetchUseditem.useditemAddress?.lng ?? ""} readOnly {...register("lng")} />
                </S.FlexRow>
                <Error01 text={errors.lat?.message} />
              </S.InputWrap>
              <S.InputWrap>
                <Label01 text="주소" />
                <S.InputWrap>
                  <S.InputWrap>
                    <S.Address value={address !== "" ? address : props.data?.fetchUseditem.useditemAddress?.address ?? ""} readOnly {...register("address")} />
                    <Error01 text={errors.address?.message} />
                  </S.InputWrap>
                  <Input01 register={register("addressDetail")} />
                </S.InputWrap>
              </S.InputWrap>
            </S.MapInfo>
          </S.AreaWrap>

          <S.InputWrap>
            <Label01 text="사진첨부" />
            <S.ImgWrap>
              {fileUrls.map((el, index) => (
                <Upload01 key={`${el}_${index}`} index={index} fileUrl={el} onChangeFileUrls={onChangeFileUrls} />
              ))}
            </S.ImgWrap>
          </S.InputWrap>

          {/* <S.InputWrap>
            <Label01 text="메인사진 설정" />
            <S.FlexRow>
              <S.RadioBtn type="radio" {...register("mainSetting")} />
              <S.RadioLabel>사진1</S.RadioLabel>
              <S.RadioBtn type="radio" {...register("mainSetting")} />
              <S.RadioLabel>사진2</S.RadioLabel>
            </S.FlexRow>
          </S.InputWrap> */}

          {/* <button type="button" onClick={validateAllFields}>
            Validate All Fields
          </button> */}
          <Button01 text={props.isEdit ? "수정하기" : "등록하기"} isActive={isValid} />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
