// Custom Hooks
// import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
// import { useFetchProduct } from "../../../commons/hooks/queries/product/useFetchProduct";
import { useProduct } from "../../../commons/hooks/customs/product/useProduct";
// UI
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";
// Style
import * as S from "./ProductDetail.styles";

export default function ProductDetail(): JSX.Element {
  const { data } = useProduct();

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
