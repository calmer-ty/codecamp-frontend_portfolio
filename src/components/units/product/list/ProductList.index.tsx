// UI
import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// Hooks
import { useFetchProductsBest } from "../../../commons/hooks/queries/product/useFetchProductsBest";
// Component
import TodayView01 from "../../../commons/todayView/01/TodayView01.index";
// Style
import * as S from "./ProductList.styles";

export default function ProductList(): JSX.Element {
  const { data } = useFetchProductsBest();

  return (
    <S.Wrapper>
      <S.Container>
        <ProductListHeader data={data} />
        <ProductListBody />
        <ProductListFooter />
      </S.Container>
      <TodayView01 />
    </S.Wrapper>
  );
}
