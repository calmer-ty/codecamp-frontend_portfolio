import * as S from "./ProductList.styles";
import { useEffect, useState } from "react";
// UI
import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// Component
import HeartIcon01 from "../../../commons/icon/heart/01";
// Type
import type { IUseditem } from "../../../../commons/types/generated/types";

export default function ProductList(): JSX.Element {
  const [product, setProduct] = useState<IUseditem[]>([]);
  useEffect(() => {
    const aaa: IUseditem[] = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    setProduct(aaa);
  }, []);

  console.log(product);

  return (
    <S.Wrapper>
      <S.Container>
        <ProductListHeader />
        <ProductListBody />
        <ProductListFooter />
      </S.Container>
      <S.TodayView>
        <h3>오늘 본 상품</h3>
        {product.map((el) => (
          <S.ViewItem key={el._id}>
            <S.Picked>
              <HeartIcon01 size={20} />
              <span>{el.pickedCount}</span>
            </S.Picked>
            <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
            <S.ItemName>{el.name}</S.ItemName>
            <S.ItemRemark>{el.remarks}</S.ItemRemark>
            <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>
            <p># 태그란입니다</p>
          </S.ViewItem>
        ))}
      </S.TodayView>
    </S.Wrapper>
  );
}
