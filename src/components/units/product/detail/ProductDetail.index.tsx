import Head from "next/head";
import { useRouter } from "next/router";
import { useFetchProduct } from "../../../commons/hooks/queries/product/useFetchProduct";

import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";

import type { IProductDetailPageProps } from "../../../../../pages/products/[useditemId]/type";
import * as S from "./ProductDetail.styles";

export default function ProductDetail({ useditem }: IProductDetailPageProps): JSX.Element {
  const router = useRouter();
  const { data } = useFetchProduct({ useditemId: router.query.useditemId as string });

  return (
    <>
      <Head>
        <meta property="og:title" content={useditem.name} />
        <meta property="og:description" content={useditem.remarks} />
        <meta property="og:image" content={useditem.images?.[0]} />
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.CardWrap>
        <ProductDetailHeader data={data} />
        <ProductDetailBody data={data} />
      </S.CardWrap>
      <ProductDetailFooter />
    </>
  );
}
