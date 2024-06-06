import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// import TodayView01 from "../../../commons/todayView/01/TodayView01.index";

import * as S from "./ProductList.styles";

export default function ProductList(): JSX.Element {
  return (
    <S.ProductList>
      <ProductListHeader />
      <ProductListBody />
      <ProductListFooter />
      {/* <TodayView01 /> */}
    </S.ProductList>
  );
}
