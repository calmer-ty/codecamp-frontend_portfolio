import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
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

import { Modal } from "antd";

// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductWrite } from "../../../../commons/libraries/validation";
import MarketWriteUI from "./MarketWrite.presenter";

import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";

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
  const [createMarket] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateMarket] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  // 게시판 등록 기능
  const onClickSubmit = async (data: IFormData): Promise<void> => {
    const { mainSetting, tags, zipcode, address, addressDetail, ...inputs } =
      data;
    try {
      const result = await createMarket({
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
      void router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 게시판 수정 기능
  const onClickUpdate = async (data: IFormData): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
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

    const { id } = useIdCheck("useditemId");

    try {
      const result = await updateMarket({
        variables: {
          useditemId: id,
          updateUseditemInput,
        },
      });
      void router.push(`/markets/${result.data?.updateUseditem._id}`);
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
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  return (
    <MarketWriteUI
      isEdit={props.isEdit}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      zipcode={zipcode}
      address={address}
      isOpen={isOpen}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
