import { useRouter } from "next/router";

// Custom Hooks
import { useIdCheck } from "./useIdCheck";
import { FETCH_USEDITEMS } from "../queries/useFetchProducts";
import { useCreateProduct } from "../mutations/useCreateProduct";
import { useUpdateProduct } from "../mutations/useUpdateProduct";
import { useDeleteProduct } from "../mutations/useDeleteProduct";

import { Modal } from "antd";

import type { IFormData } from "../../../units/product/write/ProductWrite.types";
import type { IUpdateUseditemInput } from "../../../../commons/types/generated/types";
import { FETCH_USEDITEM } from "../queries/useFetchProduct";

interface IUseProductArgs {
  fileUrls?: string[];
  latlng?: any;
  address?: string;
}

export const useProduct = (args?: IUseProductArgs) => {
  const router = useRouter();
  const { id } = useIdCheck("useditemId");

  const [createProduct] = useCreateProduct();
  const [updateProduct] = useUpdateProduct();
  const [deleteProduct] = useDeleteProduct();

  const onClickCreate = async (data: IFormData): Promise<void> => {
    console.log(data);
    if (typeof args === "undefined") return;
    try {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
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
      void router.push(`/products/${result.data?.createUseditem._id}`);
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
      const result = await updateProduct({
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
      void router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteProduct({
        variables: { useditemId: id },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      Modal.error({ content: "게시물이 삭제되었습니다." });
      void router.push("/products");
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
