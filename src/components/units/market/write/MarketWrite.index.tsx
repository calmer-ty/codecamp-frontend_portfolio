import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as S from "./MarketWrite.styles";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import type { IFormData, IMarketWriteProps } from "./MarketWrite.types";

// API
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import { useEffect, useState } from "react";
// Library
import type { Address } from "react-daum-postcode";

import Upload01 from "../../../commons/uploads/01/Upload01.index";
import Label01 from "../../../commons/element/labels/01";
import Input01 from "../../../commons/element/inputs/01";
import Error01 from "../../../commons/element/errors/01";
import { Modal } from "antd";

// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";

export default function MarketWrite(props: IMarketWriteProps): JSX.Element {
  const router = useRouter();
  // FROM
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaProductWrite),
    mode: "onChange",
  });

  // 리랜더링을 위한 state 선언
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // DATA API
  const [createProduct] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateProduct] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  // 게시판 등록 기능
  const onClickSubmit = async (data: IFormData): Promise<void> => {
    console.log(data);

    const { mainSetting, tags, zipcode, address, addressDetail, ...inputs } =
      data;
    try {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            ...inputs,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      void router.push(`/boards/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 게시판 수정 기능
  const onClickUpdate = async (data: IFormData): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const { addressDetail, ...inputs } = data;

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (inputs.name !== "") updateUseditemInput.name = inputs.name;
    if (inputs.remarks !== "") updateUseditemInput.remarks = inputs.remarks;
    if (inputs.contents !== "") updateUseditemInput.contents = inputs.contents;
    if (inputs.price !== null) updateUseditemInput.price = inputs.price;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateUseditemInput.useditemAddress = {};
      if (zipcode !== "") updateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address !== "") updateUseditemInput.useditemAddress.address = address;
      if (addressDetail !== "")
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = fileUrls;

    // boardId의 타입이 문자가 아닐 때 함수 실행 종료
    if (typeof router.query.useditemId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      const result = await updateProduct({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
      });
      void router.push(`/boards/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 주소 모달창 기능
  const [isOpen, setIsOpen] = useState(false);

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}하기</S.Title>
        <S.Form
          onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
        >
          <S.FlexColumn>
            <Label01 text="상품명" />
            <Input01
              placeholder="상품명을 작성해주세요."
              register={register("name")}
            />
            <Error01 text={formState.errors?.name?.message} />
          </S.FlexColumn>
          <S.FlexColumn>
            <Label01 text="한줄요약" />
            <Input01
              placeholder="상품을 한 줄 요약해주세요."
              register={register("remarks")}
            />
            <Error01 text={formState.errors?.remarks?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="상품설명" />
            <Input01
              placeholder="상품을 한 줄 요약해주세요."
              register={register("contents")}
            />
            <Error01 text={formState.errors?.contents?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="판매 가격" />
            <Input01
              placeholder="상품을 한 줄 요약해주세요."
              register={register("price")}
            />
            <Error01 text={formState.errors?.price?.message} />
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="태그입력" />
            <Input01
              placeholder="#태그  #태그  #태그"
              register={register("tags")}
            />
            <S.Error>{formState.errors?.tags?.message}</S.Error>
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
                <S.SearchBtn type="button" onClick={onClickAddressSearch}>
                  우편번호 검색
                </S.SearchBtn>
                <Input01
                  value={address}
                  readOnly
                  register={register("address")}
                />
                <Input01 readOnly register={register("addressDetail")} />
              </S.FlexColumn>
            </S.FlexColumn>
          </S.FlexRow>

          <S.FlexColumn>
            <Label01 text="사진첨부" />
            <S.ImgWrap>
              {fileUrls.map((el, index) => (
                <Upload01
                  key={`${el}_${index}`}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                />
              ))}
            </S.ImgWrap>
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="메인사진 설정" />
            <S.FlexRow>
              <S.RadioBtn type="radio" {...register("mainSetting")} />
              <S.RadioLabel>사진1</S.RadioLabel>
              <S.RadioBtn type="radio" {...register("mainSetting")} />
              <S.RadioLabel>사진2</S.RadioLabel>
            </S.FlexRow>
          </S.FlexColumn>

          <S.SubmitBtn>{props.isEdit ? "수정" : "등록"}하기</S.SubmitBtn>
        </S.Form>
      </S.Container>

      {isOpen !== undefined && (
        <S.AddressModal
          open={isOpen}
          onOk={onClickAddressSearch}
          onCancel={onClickAddressSearch}
        >
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
    </S.Wrapper>
  );
}
