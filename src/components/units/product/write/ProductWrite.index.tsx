import { useForm } from "react-hook-form";
import * as S from "./ProductWrite.styles";
import type { IFormData, IProductWriteProps } from "./ProductWrite.types";
// Component
import Upload01 from "../../../commons/uploads/01/Upload01.index";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/01";
import Error01 from "../../../commons/element/errors/01";
import Button01 from "../../../commons/element/buttons/01";

// Custom Hooks
import { useProduct } from "../../../commons/hooks/customs/useProduct";
import { useFileUrls } from "../../../commons/hooks/customs/useFileUrls";
import useMapSelection from "../../../commons/hooks/customs/useMapSelect";
// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";

export default function ProductWriteUI(props: IProductWriteProps): JSX.Element {
  const { register, handleSubmit, setValue, trigger, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaProductWrite),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const { fileUrls, onChangeFileUrls } = useFileUrls(props);
  const { latlng, address } = useMapSelection();
  const { onClickCreate, onClickUpdate } = useProduct({ fileUrls, latlng });

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
        <S.Form onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickCreate)}>
          <S.InputWrap>
            <Label01 text="상품명" />
            <Input01
              placeholder="상품명을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.name ?? ""}
              register={register("name")}
            />
            <Error01 text={formState.errors.name?.message} />
          </S.InputWrap>
          <S.InputWrap>
            <Label01 text="한줄요약" />
            <Input01
              placeholder="상품 한줄요약을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.remarks ?? ""}
              register={register("remarks")}
            />
            <Error01 text={formState.errors.remarks?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="상품설명" />
            <S.Contents
              placeholder="상품설명을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.contents ?? ""}
              onChange={onChangeContents}
            />
            <Error01 text={formState.errors.contents?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="판매 가격" />
            <Input01
              placeholder="상품가격을 작성해주세요."
              defaultValue={props.data?.fetchUseditem.price ?? ""}
              register={register("price")}
            />
            <Error01 text={formState.errors.price?.message} />
          </S.InputWrap>

          <S.InputWrap>
            <Label01 text="태그입력" />
            <Input01 placeholder="#태그  #태그  #태그" register={register("tags")} />
            <Error01 text={formState.errors.tags?.message} />
          </S.InputWrap>

          <S.AreaWrap>
            <S.Map>
              <Label01 text="거래위치" />
              <div id="map" style={{ width: "100%", height: "250px" }}></div>
            </S.Map>
            <S.MapInfo>
              <S.InputWrap>
                <Label01 text="주소" />
                <S.InputWrap style={{ rowGap: "20px" }}>
                  <S.InputWrap>
                    <Input01 value={address} register={register("address")} />
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

          <Button01 text={props.isEdit ? "수정하기" : "등록하기"} isActive={formState.isValid} />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
