import { useRouter } from "next/router";

// Custom Hooks
import { useIdCheck } from "./useIdCheck";
import { FETCH_USEDITEMS } from "../queries/useFetchProducts";
import { useCreateProduct } from "../mutations/useCreateProduct";
import { useUpdateProduct } from "../mutations/useUpdateProduct";
import { useDeleteProduct } from "../mutations/useDeleteProduct";
import { FETCH_USEDITEM, useFetchProduct } from "../queries/useFetchProduct";
// Component
import { Modal } from "antd";
// Type
import type { IFormData } from "../../../units/product/write/ProductWrite.types";
import type { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

interface IUseProductArgs {
  fileUrls?: string[];
  latlng?: any;
  address?: string;
  tags?: string[];
  pick?: number;
}

declare const window: typeof globalThis & {
  IMP: any;
};

export const useProduct = (args?: IUseProductArgs) => {
  const router = useRouter();
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({ useditemId: id });

  const [createProduct] = useCreateProduct();
  const [updateProduct] = useUpdateProduct();
  const [deleteProduct] = useDeleteProduct();

  // 결제 기능
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp80516171");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: data?.fetchUseditem.name,
        amount: data?.fetchUseditem.price,
        // buyer_email: "gildong@gmail.com",
        // buyer_name: "홍길동",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment", // 모바일에서는 결제 시, 페이지 주소가 바뀜. 따라서 결제 끝나고 돌아갈 주소 입력해야함.
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          //   백엔드에 결제 관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          //   createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  // 판매 상품 등록
  const onClickCreate = async (data: IFormData): Promise<void> => {
    if (typeof args === "undefined") return;
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

  // 판매 상품 수정
  const onClickUpdate = async (data: IFormData): Promise<void> => {
    if (typeof args === "undefined") return;
    // files
    const currentFiles = JSON.stringify(args.fileUrls);
    const defaultFiles = JSON.stringify(data.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    // tags
    const currentTags = JSON.stringify(args.tags);
    const defaultTags = JSON.stringify(data.tags);
    const isChangedTags = currentTags !== defaultTags;

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
    if (isChangedTags) updateUseditemInput.tags = args.tags;

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

  // 판매 상품 삭제
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
    onClickPayment,
  };
};
