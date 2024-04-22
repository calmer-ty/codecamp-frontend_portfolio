import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
// Component
import Upload01 from "../../../commons/uploads/01/Upload01.index";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/01";
import Error01 from "../../../commons/element/errors/01";
import Button01 from "../../../commons/element/buttons/01";
import { TagsWrite01 } from "../../../commons/tags/write/01";
// Custom Hooks
import { useProduct } from "../../../commons/hooks/customs/product/useProduct";
import useMap from "../../../commons/hooks/customs/useMap";
// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";
// Type
import type { IFormDataProductWrite, IProductWriteProps } from "./ProductWrite.types";
// Style
import * as S from "./ProductWrite.styles";

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<IFormDataProductWrite>({
    resolver: yupResolver(schemaProductWrite),
    mode: "onChange",
    // context: { isEdit: props.isEdit }, // 추가: 폼의 수정 상태 정보 전달
  });

  // 맵 선택 Hook
  const { latlng, address } = useMap(33.450701, 126.570667, true);

  // 상품 설명 이벤트
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  useEffect(() => {
    // 초기 값 설정 및 유효성 검사
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
      setValue(key as "name" | "remarks" | "contents" | "price" | "tags" | "address" | "lat" | "lng" | "images" | "addressDetail" | `tags.${number}` | `images.${number}`, value, {
        shouldValidate: true,
      });
    });

    // 필요한 경우 trigger() 사용
    void trigger();
  }, [setValue, props.data?.fetchUseditem, trigger]);

  // 파일 전송 기능
  const [files, setFiles] = useState<File[]>(new Array(3).fill(null));
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // 업로드 컴포넌트에서 값을 받아온다, 이유는 게시판 작성 화면에도 이미지를 보여주기 위해선
  // Upload 컴포넌트의 file input클릭 시 얻어온 url 값이 필요하다
  const onChangeFileUrls = (fileUrl: string, index: number, file: File | undefined): void => {
    // 객체나 배열은 값을 바꾸면 주소값은 그대로이기 떄문에 setState 에서 인식을 하지 못하여 리랜더링이 되지 않는다
    // 그래서 얕은 복사를 하여 새로운 배열로 변수를 만들어주어 배열 전체를 바꾸는식으로 스테이트 값을 변경한다.
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);

    if (file === undefined) return;
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };
  // const onChangeFiles = (file: File, index: number): void => {
  //   const newFiles = [...files];
  //   newFiles[index] = file;
  //   setFiles(newFiles);
  // };

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  // Tags
  const { props: tagsProps } = TagsWrite01();
  const tags: string[] = [];
  tagsProps.children[0].forEach((el: React.ReactElement) => {
    if (typeof el.key !== "string") return;
    tags.push(el.key);
  });

  // 상품 뮤테이션 Hook
  const { onClickCreate, onClickUpdate } = useProduct({
    files,
    fileUrls,
    address,
    latlng,
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
              {tagsProps.children.map((el: string) => (
                <div key={el}>{el}</div>
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
                <S.InputWrap style={{ rowGap: "20px" }}>
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

          <S.InputWrap>
            <Label01 text="메인사진 설정" />
            <S.FlexRow>
              {/* <S.RadioBtn type="radio" {...register("mainSetting")} /> */}
              <S.RadioLabel>사진1</S.RadioLabel>
              {/* <S.RadioBtn type="radio" {...register("mainSetting")} /> */}
              <S.RadioLabel>사진2</S.RadioLabel>
            </S.FlexRow>
          </S.InputWrap>

          {/* <button type="button" onClick={validateAllFields}>
            Validate All Fields
          </button> */}
          <Button01 text={props.isEdit ? "수정하기" : "등록하기"} isActive={isValid} />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
