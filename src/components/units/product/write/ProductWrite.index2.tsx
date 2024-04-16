import { useForm } from "react-hook-form";
import {
  // useEffect,
  useState,
} from "react";
// Component
import Upload01 from "../../../commons/uploads/01/Upload01.index";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/defaultValue/01";
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
  const { register, handleSubmit, setValue, trigger, formState } = useForm<IFormDataProductWrite>({
    resolver: yupResolver(schemaProductWrite),
    mode: "onChange",
  });

  // 맵 선택 Hook
  const { latlng, address } = useMap(33.450701, 126.570667, true);

  // 상품 설명 이벤트
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  // 파일 전송 기능
  const [files, setFiles] = useState<Array<File | null>>(new Array(3).fill(null));
  const onChangeFiles = (file: File, index: number): void => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  // useEffect(() => {
  //   const images = props.data?.fetchUseditem.images;
  //   if (images !== undefined && images !== null) setFiles([...images]);
  // }, [props.data]);

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
            <Input01 placeholder="상품명을 작성해주세요." defaultValue={props.data?.fetchUseditem.name ?? ""} register={register("name")} />
            <Error01 text={formState.errors.name?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="한줄요약" />
            <Input01 placeholder="상품 한줄요약을 작성해주세요." defaultValue={props.data?.fetchUseditem.remarks ?? ""} register={register("remarks")} />
            <Error01 text={formState.errors.remarks?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="상품설명" />
            <S.Contents placeholder="상품설명을 작성해주세요." defaultValue={props.data?.fetchUseditem.contents ?? ""} onChange={onChangeContents} />
            <Error01 text={formState.errors.contents?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="판매 가격" />
            <Input01 placeholder="0" defaultValue={props.data?.fetchUseditem.price ?? ""} register={register("price")} />
            <Error01 text={formState.errors.price?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="태그입력" />
            <S.Tags>
              {tagsProps.children.map((el: string) => (
                <>
                  <div>{el}</div>
                </>
              ))}
            </S.Tags>
            <Error01 text={formState.errors.tags?.message} />
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
                  {/* <S.FlexRow> */}
                  <S.LatLngInput type="number" {...register("lat")} value={latlng?.La} readOnly />
                  <S.LatLngInput type="number" {...register("lng")} value={latlng?.Ma} readOnly />
                  {/* </S.FlexRow> */}
                  {/* <S.InputWrap></S.InputWrap> */}
                </S.FlexRow>
                <Error01 text={formState.errors.lat?.message} />
              </S.InputWrap>
              <S.InputWrap>
                <Label01 text="주소" />
                <S.InputWrap style={{ rowGap: "20px" }}>
                  <S.InputWrap>
                    <Input01 value={address} register={register("address")} readOnly />
                    <Error01 text={formState.errors.address?.message} />
                  </S.InputWrap>
                  <Input01 register={register("addressDetail")} />
                </S.InputWrap>
              </S.InputWrap>
            </S.MapInfo>
          </S.AreaWrap>

          <S.InputWrap>
            <Label01 text="사진첨부" />
            <S.ImgWrap>
              {files.map((el, index) => (
                <Upload01 key={`${index}`} index={index} onChangeFiles={onChangeFiles} />
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

          <Button01 text={props.isEdit ? "수정하기" : "등록하기"} isActive={formState.isValid} />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
