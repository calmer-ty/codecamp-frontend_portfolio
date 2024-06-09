// import Head from "next/head";
import { useRouter } from "next/router";
import { useFetchProduct } from "../../../commons/hooks/queries/product/useFetchProduct";
// UI
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";
// Style
import * as S from "./ProductDetail.styles";

export default function ProductDetail(): JSX.Element {
  const router = useRouter();
  const useditemId = router.query.useditemId as string;
  const { data } = useFetchProduct({ useditemId });

  return (
    <>
      {/* <Head>
        <meta property="og:title" content="중고마켓" />
        <meta property="og:description" content="나의 중고마켓에 오신 것을 환영합니다!" />
        <meta property="og:image" content="http://~~~~" />
      </Head> */}
      <S.CardWrap>
        <ProductDetailHeader data={data} />
        <ProductDetailBody data={data} />
      </S.CardWrap>
      <ProductDetailFooter />
    </>
  );
}
