import { GraphQLClient } from "graphql-request";
import { FETCH_USEDITEM } from "../../../src/components/commons/hooks/queries/product/useFetchProduct";

import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.index";
import type { IQuery, IQueryFetchUseditemArgs } from "../../../src/commons/types/generated/types";
import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";

// Props 타입 정의
interface ProductDetailPageProps {
  useditems: {
    name: string;
    remarks: string;
    images: string[];
  };
}

export default function ProductsDetailPage(props: ProductDetailPageProps): JSX.Element {
  console.log(props);
  return <ProductDetail {...props} />;
}

export const getServerSideProps: GetServerSideProps<ProductDetailPageProps> = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<ProductDetailPageProps>> => {
  console.log("여기는 서버입니다.");
  const { useditemId } = context.params as { useditemId: string };

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql");
  const result = await graphQLClient.request<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    useditemId,
  });

  return { props: { useditems: { name: result.fetchUseditem.name, remarks: result.fetchUseditem.remarks, images: result.fetchUseditem.images ?? [] } } };
};
