import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as S from "./ProductWrite.styles";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import type { IFormData, IProductWriteProps } from "./ProductWrite.types";

// API
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { useEffect, useState } from "react";
// Library
import type { Address } from "react-daum-postcode";

import Label01 from "../../../commons/labels/01";
import Upload01 from "../../../commons/uploads/01/Upload01.index";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";
import Input01 from "../../../commons/inputs/01";
import Error01 from "../../../commons/errors/01";

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  const router = useRouter();
  // FROM
  const { register, handleSubmit, watch, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaProductWrite),
    mode: "onChange",
  });

  // 입력값 변수
  const inputs = {
    name: watch().name,
    remarks: watch().remarks,
    contents: watch().contents,
    price: Number(watch().price),
    tags: watch().tags,
  };

  // 리랜더링을 위한 state 선언
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const addressDetail = watch().addressDetail;

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
    if (
      inputs.name !== "" &&
      inputs.remarks !== "" &&
      inputs.price !== null &&
      zipcode === "" &&
      address === "" &&
      addressDetail === "" &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

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
              register={register("remarks")}
            />
            {/* <S.ProductInput
              type="text"
              placeholder="상품을 설명해주세요."
              defaultValue={props.data?.fetchBoard.title}
              register={register("contents")}
            /> */}
            <S.Error>{formState.errors?.contents?.message}</S.Error>
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="판매 가격" />
            <Input01
              placeholder="상품을 한 줄 요약해주세요."
              register={register("price")}
            />
            {/* <S.ProductInput
              type="text"
              placeholder="판매 가격을 입력해주세요."
              defaultValue={props.data?.fetchBoard.contents}
              {...register("price")}
            /> */}
            <S.Error>{formState.errors?.price?.message}</S.Error>
          </S.FlexColumn>

          <S.FlexColumn>
            <Label01 text="태그입력" />
            <Input01
              placeholder="#태그  #태그  #태그"
              register={register("tags")}
            />
            {/* <S.ProductInput
              placeholder="내용을 작성해주세요."
              defaultValue={props.data?.fetchBoard.contents}
              {...register("tags")}
            /> */}
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
                <S.Address
                  readOnly
                  defaultValue={
                    address !== ""
                      ? address
                      : props.data?.fetchBoard.boardAddress?.address ?? ""
                  }
                  {...register("address", {
                    required: props.isEdit ? "" : "This is required.",
                  })}
                />
                <S.Address
                  defaultValue={
                    props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }
                  {...register("addressDetail", {
                    required: props.isEdit ? "" : "This is required.",
                  })}
                />
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
