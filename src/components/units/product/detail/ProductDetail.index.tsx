// Custom Hooks
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
import { useFetchProduct } from "../../../commons/hooks/queries/product/useFetchProduct";
import { useProduct } from "../../../commons/hooks/customs/product/useProduct";
// UI
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";
// Style
import * as S from "./ProductDetail.styles";

export default function ProductDetail(): JSX.Element {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({
    useditemId: id,
  });

  const { onClickDelete } = useProduct();

  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <ProductDetailHeader data={data} />
          <ProductDetailBody data={data} onClickDelete={onClickDelete} />
        </S.CardWrap>
        <ProductDetailFooter />
      </S.Wrapper>
    </>
  );
}
