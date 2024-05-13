import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
import { useFetchProduct } from "../../../commons/hooks/queries/product/useFetchProduct";
// UI
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";
// Style
import * as S from "./ProductDetail.styles";
import { useEffect } from "react";

export default function ProductDetail(): JSX.Element {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({ useditemId: id });

  useEffect(() => {
    console.log("값이 바뀌어 렌더링 되었습니다");
  }, [data]);
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
