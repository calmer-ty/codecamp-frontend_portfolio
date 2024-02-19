import { useRouter } from "next/router";

// Custom Hooks
import { useIdCheck } from "./useIdCheck";
import { FETCH_USEDITEMS } from "../queries/useFetchMarkets";
import { useCreateMarket } from "../mutations/useCreateMarket";
import { useUpdateMarket } from "../mutations/useUpdateMarket";
import { useDeleteMarket } from "../mutations/useDeleteMarket";

import { Modal } from "antd";

import type { IFormData } from "../../../units/market/write/MarketWrite.types";
import type { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

export const useMarket = (fileUrls?: string[], zipcode?: string, address?: string) => {
  const router = useRouter();
  const { id } = useIdCheck("useditemId");

  const [createMarket] = useCreateMarket();
  const [updateMarket] = useUpdateMarket();
  const [deleteMarket] = useDeleteMarket();

  const onClickCreate = async (data: IFormData): Promise<void> => {
    try {
      const result = await createMarket({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
            images: fileUrls,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      void router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.images);
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
      if (addressDetail !== "") updateUseditemInput.useditemAddress.addressDetail = addressDetail;
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

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteMarket({
        variables: { useditemId: id },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      Modal.error({ content: "게시물이 삭제되었습니다." });
      void router.push("/markets");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickCreate,
    onClickUpdate,
    onClickDelete,
  };
};
