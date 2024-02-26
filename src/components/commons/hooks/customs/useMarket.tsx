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
import { FETCH_USEDITEM } from "../queries/useFetchMarket";

interface IUseMarketArgs {
  fileUrls?: string[];
  latlng?: any;
  address?: string;
}

export const useMarket = (args?: IUseMarketArgs) => {
  const router = useRouter();
  const { id } = useIdCheck("useditemId");

  const [createMarket] = useCreateMarket();
  const [updateMarket] = useUpdateMarket();
  const [deleteMarket] = useDeleteMarket();

  const onClickCreate = async (data: IFormData): Promise<void> => {
    if (typeof args === "undefined") return;
    try {
      const result = await createMarket({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              lat: args.latlng.Ma,
              lng: args.latlng.La,
              address: args.address,
              addressDetail: data.addressDetail,
            },
            images: args.fileUrls,
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
    if (typeof args === "undefined") return;
    const currentFiles = JSON.stringify(args.fileUrls);
    const defaultFiles = JSON.stringify(data.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const { addressDetail, ...inputs } = data;

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (inputs.name !== "") updateUseditemInput.name = inputs.name;
    if (inputs.remarks !== "") updateUseditemInput.remarks = inputs.remarks;
    if (inputs.contents !== "") updateUseditemInput.contents = inputs.contents;
    if (inputs.price !== null) updateUseditemInput.price = inputs.price;
    if (args.address !== "" || addressDetail !== "") {
      updateUseditemInput.useditemAddress = {};
      if (args.address !== "") updateUseditemInput.useditemAddress.address = args.address;
      if (addressDetail !== "") updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = args.fileUrls;

    try {
      const result = await updateMarket({
        variables: {
          useditemId: id,
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: id },
          },
        ],
      });
      console.log("일단 수정 성공");
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
