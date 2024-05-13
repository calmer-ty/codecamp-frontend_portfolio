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
  const useditemId = router.query.useditemId;
  if (typeof useditemId !== "string") return <></>;
  const { data } = useFetchProduct({ useditemId });

  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <ProductDetailHeader data={data} />
          <ProductDetailBody data={data} />
        </S.CardWrap>
        <ProductDetailFooter />
      </S.Wrapper>
    </>
  );
}
