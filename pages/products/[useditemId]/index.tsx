import { GraphQLClient } from "graphql-request";

import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.index";
import { FETCH_USEDITEM } from "../../../src/components/commons/hooks/queries/product/useFetchProduct";

import type { IQuery, IQueryFetchUseditemArgs } from "../../../src/commons/types/generated/types";
import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { IProductDetailPageProps } from "./type";

export default function ProductsDetailPage(props: IProductDetailPageProps): JSX.Element {
  return <ProductDetail {...props} />;
}

export const getServerSideProps: GetServerSideProps<IProductDetailPageProps> = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<IProductDetailPageProps>> => {
  console.log("여기는 서버입니다.");
  const { useditemId } = context.params as { useditemId: string };

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql");
  const result = await graphQLClient.request<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    useditemId,
  });

  return { props: { useditem: { name: result.fetchUseditem.name, remarks: result.fetchUseditem.remarks, images: result.fetchUseditem.images ?? [] } } };
};
