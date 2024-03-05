import * as S from "./ProductDetail.styles";
// Custom Hooks
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
import { useFetchProduct } from "../../../commons/hooks/queries/useFetchProduct";
import { useProduct } from "../../../commons/hooks/customs/useProduct";
// UI
import ProductDetailBody from "./body/ProductDetailBody.index";
import ProductDetailHeader from "./header/ProductDetailHeader.index";
import ProductDetailFooter from "./footer/ProductDetailFooter.index";

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
