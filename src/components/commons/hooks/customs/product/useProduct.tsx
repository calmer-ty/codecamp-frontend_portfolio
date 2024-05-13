import { useRouter } from "next/router";

import { useCreateProduct } from "../../mutations/product/useCreateProduct";
import { useUpdateProduct } from "../../mutations/product/useUpdateProduct";
import { useDeleteProduct } from "../../mutations/product/useDeleteProduct";
import { useUploadFile } from "../../mutations/useUploadFile";
import { FETCH_USEDITEM } from "../../queries/product/useFetchProduct";
import { FETCH_USEDITEMS } from "../../queries/product/useFetchProducts";
import { Modal } from "antd";

import type { IFormDataProductWrite } from "../../../../units/product/write/ProductWrite.types";
import type { IUpdateUseditemInput } from "../../../../../commons/types/generated/types";

interface IUseProductArgs {
  useditemId?: string;
  files?: File[];
  fileUrls?: string[];
  latlng?: any;
  address?: string;
  tags?: string[];
  pick?: number;
}

export const useProduct = (args: IUseProductArgs) => {
  const router = useRouter();

  const [createProduct] = useCreateProduct();
  const [updateProduct] = useUpdateProduct();
  const [deleteProduct] = useDeleteProduct();
  const [uploadFile] = useUploadFile();

  // 파일 업로드 및 URL 처리 함수
  const uploadFilesAndGetUrls = async (files: File[] | undefined) => {
    // 파일 업로드 및 URL 처리 함수 정의
    let resultFileUrls: string[] = []; // 파일 URL을 저장할 배열 초기화

    if (files !== undefined) {
      // 파일이 존재하는 경우에만 처리
      const resultFile = await Promise.all(
        // 모든 파일에 대해 병렬로 업로드 처리
        files.map(async (file) => {
          if (file !== null) return await uploadFile({ variables: { file } }); // 파일 업로드 요청
          return null; // 파일이 null이거나 undefined인 경우, null 반환
        })
      );
      resultFileUrls = resultFile.map((res) => res?.data?.uploadFile?.url ?? ""); // 업로드된 파일의 URL을 추출하여 배열에 저장
    }

    return resultFileUrls; // 파일 URL 배열 반환
  };

  // 판매 상품 등록
  const onClickCreate = async (data: IFormDataProductWrite): Promise<void> => {
    if (args === undefined) return;

    const resultFileUrls = await uploadFilesAndGetUrls(args.files); // 파일 업로드 및 URL 처리 함수 호출하여 파일 URL 배열 획득

    try {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: args.tags,
            useditemAddress: {
              lat: args.latlng.Ma,
              lng: args.latlng.La,
              address: args.address,
              addressDetail: data.addressDetail,
            },
            images: resultFileUrls, // 업로드된 파일 URL 배열 전달
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USEDITEMS,
        //   },
        // ],
      });
      Modal.success({ content: "상품이 등록되었습니다!" });
      void router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 판매 상품 수정
  const onClickUpdate = async (data: IFormDataProductWrite): Promise<void> => {
    if (args.useditemId === undefined) return;

    const resultFileUrls = await uploadFilesAndGetUrls(args.files);

    // # 파일 URL 병합 로직
    // const newFileUrls = args.fileUrls?.map((url, index) => resultFileUrls[index] || url);
    const newFileUrls =
      args.fileUrls?.map((url, index) => {
        const resultUrl = typeof resultFileUrls[index] === "string" ? resultFileUrls[index] : undefined;
        return resultUrl !== undefined && resultUrl !== "" ? resultUrl : url;
      }) ?? [];

    // files
    const defaultFiles = JSON.stringify(args.fileUrls);
    const currentFiles = JSON.stringify(newFileUrls);
    const isChangedFiles = currentFiles !== defaultFiles;

    // tags
    const currentTags = JSON.stringify(args.tags);
    const defaultTags = JSON.stringify(data.tags);
    const isChangedTags = currentTags !== defaultTags;

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (data.name !== "") updateUseditemInput.name = data.name;
    if (data.remarks !== "") updateUseditemInput.remarks = data.remarks;
    if (data.contents !== "") updateUseditemInput.contents = data.contents;
    if (data.price !== null) updateUseditemInput.price = data.price;
    if (args.address !== "" || data.addressDetail !== "") {
      updateUseditemInput.useditemAddress = {};
      if (args.address !== "") updateUseditemInput.useditemAddress.address = args.address;
      if (args.address !== "") updateUseditemInput.useditemAddress.address = args.address;
      if (data.addressDetail !== "") updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = newFileUrls;
    if (isChangedTags) updateUseditemInput.tags = args.tags;

    try {
      const result = await updateProduct({
        variables: {
          useditemId: args.useditemId,
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: args.useditemId },
          },
        ],
      });
      console.log(result);
      Modal.success({ content: "상품이 수정되었습니다!" });
      void router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 판매 상품 삭제
  const onClickDelete = async (): Promise<void> => {
    if (args.useditemId === undefined) return;

    try {
      await deleteProduct({
        variables: { useditemId: args.useditemId },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      Modal.error({ content: "상품이 삭제되었습니다!" });
      void router.push("/products");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickCreate,
    onClickUpdate,
    onClickDelete,
  };
};
