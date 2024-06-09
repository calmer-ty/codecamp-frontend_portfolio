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

export default function ProductDetail(props: any): JSX.Element {
  console.log(props);
  const router = useRouter();
  const useditemId = router.query.useditemId as string;
  const { data } = useFetchProduct({ useditemId });

  return (
    <>
      <Head>
        <meta property="og:title" content={data?.fetchUseditem.name} />
        <meta property="og:description" content={data?.fetchUseditem.remarks} />
        <meta property="og:image" content={data?.fetchUseditem.images?.[0]} />
      </Head>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <S.CardWrap>
        <ProductDetailHeader data={data} />
        <ProductDetailBody data={data} />
      </S.CardWrap>
      <ProductDetailFooter />
    </>
  );
}
// export const getServerSideProps = async (context: any): Promise<any> => {
//   const { id } = context.params as { id: string };
//   console.log("여기는 서버입니다.");
//   // 백엔드의 데이터 요청 로직

//   // 1. 여기서 API 요청
//   const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql");
//   const result = await graphQLClient.request(FETCH_USEDITEM, {
//     useditemId: id,
//   });

//   // 2. 받은 결과를 return
//   return { props: { useditems: { name: result.fetchUseditem.name, remarks: result.fetchUseditem.remarks, images: result.fetchUseditem.images } } };
// };
