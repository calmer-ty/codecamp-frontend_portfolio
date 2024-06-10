import Head from "next/head";
// import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import {
  // FETCH_USEDITEM,
  useFetchProduct,
} from "../../../commons/hooks/queries/product/useFetchProduct";
// UI
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";
// Style
import * as S from "./ProductDetail.styles";

interface ProductDetailProps {
  useditems: {
    name: string;
    remarks: string;
    images: string[];
  };
}

export default function ProductDetail({ useditems }: ProductDetailProps): JSX.Element {
  const router = useRouter();
  const useditemId = router.query.useditemId as string;
  const { data } = useFetchProduct({ useditemId });

  return (
    <>
      <Head>
        <meta property="og:title" content={data?.fetchUseditem.name} />
        <meta property="og:description" content={data?.fetchUseditem.remarks} />
        <meta property="og:image" content={data?.fetchUseditem.images?.[0]} />
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
