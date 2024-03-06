import * as S from "./ProductList.styles";
// UI
import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// import { useState } from "react";

export default function ProductList(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <ProductListHeader />
        <ProductListBody />
        <ProductListFooter />
      </S.Container>
      <S.TodayView>
        <h3>오늘 본 상품</h3>
        <S.ViewItem>111</S.ViewItem>
        <S.ViewItem>222</S.ViewItem>
      </S.TodayView>
    </S.Wrapper>
  );
}
