import { useRouter } from "next/router";

import { useCreateProduct } from "../../mutations/product/useCreateProduct";
import { useUpdateProduct } from "../../mutations/product/useUpdateProduct";
import { useDeleteProduct } from "../../mutations/product/useDeleteProduct";
import { usePickProduct } from "../../mutations/product/usePickProduct";
import { useUploadFile } from "../../mutations/useUploadFile";
import { FETCH_USEDITEM, useFetchProduct } from "../../queries/product/useFetchProduct";
import { FETCH_USEDITEMS } from "../../queries/product/useFetchProducts";

import { Modal } from "antd";

import type { IFormDataProductWrite } from "../../../../units/product/write/ProductWrite.types";
import type { IQuery, IQueryFetchUseditemArgs, IUpdateUseditemInput } from "../../../../../commons/types/generated/types";

interface IUseProductArgs {
  _id?: string;
  files?: File[];
  fileUrls?: string[];
  latlng?: any;
  address?: string;
  tags?: string[];
  pick?: number;
}

export const useProduct = (
  props: IUseProductArgs
): {
  onClickCreate: (data: IFormDataProductWrite) => Promise<void>;
  onClickUpdate: (data: IFormDataProductWrite) => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickPick: () => Promise<void>;
} => {
  const router = useRouter();
  const useditemId = router.query.useditemId as string;
  const { data: productData } = useFetchProduct({ useditemId });

  const [createProduct] = useCreateProduct();
  const [updateProduct] = useUpdateProduct();
  const [deleteProduct] = useDeleteProduct();
  const [pickProduct] = usePickProduct();
  const [uploadFile] = useUploadFile();

  // 파일 업로드 및 URL 처리 함수
  const uploadFilesAndGetUrls = async (files: File[] | undefined): Promise<string[]> => {
    let resultFileUrls: string[] = []; // 파일 URL을 저장할 배열 초기화

    // 파일이 존재하는 경우에만 처리
    if (files !== undefined) {
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
    const resultFileUrls = await uploadFilesAndGetUrls(props.files); // 파일 업로드 및 URL 처리 함수 호출하여 파일 URL 배열 획득
    try {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: props.tags,
            useditemAddress: {
              lat: props.latlng.Ma,
              lng: props.latlng.La,
              address: props.address,
              addressDetail: data.addressDetail,
            },
            images: resultFileUrls, // 업로드된 파일 URL 배열 전달
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      Modal.success({ content: "상품이 등록되었습니다!" });
      void router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 판매 상품 수정
  const onClickUpdate = async (data: IFormDataProductWrite): Promise<void> => {
    if (typeof props._id !== "string") return;
    console.log(data.contents);

    const resultFileUrls = await uploadFilesAndGetUrls(props.files);
    // 파일 URL 병합 로직 / const newFileUrls = props.fileUrls?.map((url, index) => resultFileUrls[index] || url);
    const newFileUrls =
      props.fileUrls?.map((url, index) => {
        const resultUrl = typeof resultFileUrls[index] === "string" ? resultFileUrls[index] : undefined;
        return resultUrl !== undefined && resultUrl !== "" ? resultUrl : url;
      }) ?? [];

    // files
    const defaultFiles = JSON.stringify(productData?.fetchUseditem.images);
    const currentFiles = JSON.stringify(newFileUrls);
    const isChangedFiles = currentFiles !== defaultFiles;

    // tags
    const currentTags = JSON.stringify(props.tags);
    const defaultTags = JSON.stringify(data.tags);
    const isChangedTags = currentTags !== defaultTags;

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (data.name !== "") updateUseditemInput.name = data.name;
    if (data.remarks !== "") updateUseditemInput.remarks = data.remarks;
    if (data.contents !== "") updateUseditemInput.contents = data.contents;
    if (data.price !== null) updateUseditemInput.price = data.price;
    if (props.address !== "" || data.addressDetail !== "") {
      updateUseditemInput.useditemAddress = {};
      if (data.lat !== null) updateUseditemInput.useditemAddress.lat = props.latlng.Ma;
      if (data.lng !== null) updateUseditemInput.useditemAddress.lng = props.latlng.La;
      if (props.address !== "") updateUseditemInput.useditemAddress.address = props.address;
      if (data.addressDetail !== "") updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = newFileUrls;
    if (isChangedTags) updateUseditemInput.tags = props.tags;

    try {
      const result = await updateProduct({
        variables: {
          useditemId: props._id,
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: props._id },
          },
        ],
      });
      Modal.success({ content: "상품이 수정되었습니다!" });
      void router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 판매 상품 삭제
  const onClickDelete = async (): Promise<void> => {
    if (typeof props._id !== "string") return;

    try {
      await deleteProduct({
        variables: { useditemId: props._id },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      Modal.error({ content: "상품이 삭제되었습니다!" });
      void router.push("/products");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: "상품에 대한 권한이 없습니다" });
    }
  };

  // 상품 찜하기
  const onClickPick = async (): Promise<void> => {
    if (typeof props._id !== "string") return;
    console.log(props._id);

    try {
      await pickProduct({
        variables: { useditemId: props._id },
        optimisticResponse: {
          toggleUseditemPick: props.pick ?? 0,
        },
        update: (cache, { data }) => {
          const prevData = cache.readQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: props._id ?? "",
            },
          });
          // 디버깅: 캐시에서 읽은 데이터 확인
          console.log("Previous Data:", prevData);

          cache.writeQuery({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: props._id,
            },
            data: {
              fetchUseditem: {
                _id: props._id,
                __typename: "Useditem",
                ...prevData?.fetchUseditem,
                pickedCount: data?.toggleUseditemPick,
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: "로그인 후 이용해주세요" });
    }
  };

  return {
    onClickCreate,
    onClickUpdate,
    onClickDelete,
    onClickPick,
  };
};
