import Head from "next/head";
import { useRouter } from "next/router";
import { useFetchProduct } from "../../../commons/hooks/queries/product/useFetchProduct";

import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";

import type { IProductDetailPageProps } from "../../../../../pages/products/[useditemId]/type";
import * as S from "./ProductDetail.styles";

export default function ProductDetail({ useditems }: IProductDetailPageProps): JSX.Element {
  const router = useRouter();
  const useditemId = router.query.useditemId as string;
  const { data } = useFetchProduct({ useditemId });

  return (
    <>
      <Head>
        <meta property="og:title" content={useditems.name} />
        <meta property="og:description" content={useditems.remarks} />
        <meta property="og:image" content={useditems.images?.[0]} />
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
