import * as S from "./ProductList.styles";
// UI
import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// Type
import type { IUseditem } from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";

const TODAY_VIEW_PRODUCT = 2;

export default function ProductList(): JSX.Element {
  const [product, setProduct] = useState<IUseditem[]>([]);
  const onClickTodayView = (product: IUseditem) => () => {
    const todayView: IUseditem[] = JSON.parse(localStorage.getItem("todayView") ?? "[]");

    // 2. 이미 담겼는지 확인
    const temp = todayView.filter((el) => el._id === product._id);
    if (temp.length >= 1) {
      return;
    }

    // 3. 클릭한 상품 추가하기
    todayView.push(product);
    if (todayView.length > TODAY_VIEW_PRODUCT) {
      todayView.shift();
    }
    // 4. 오늘 본 상품 변경
    localStorage.setItem("todayView", JSON.stringify(todayView));

    setProduct(todayView);
  };
  useEffect(() => {
    console.log(product);
  }, []);
  return (
    <S.Wrapper>
      <S.Container>
        <ProductListHeader onClickTodayView={onClickTodayView} />
        <ProductListBody onClickTodayView={onClickTodayView} />
        <ProductListFooter />
      </S.Container>
      <S.TodayView>
        {product}
        <h3>오늘 본 상품</h3>
        <S.ViewItem>111</S.ViewItem>
        <S.ViewItem>222</S.ViewItem>
      </S.TodayView>
    </S.Wrapper>
  );
}
