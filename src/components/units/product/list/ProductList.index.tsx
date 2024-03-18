import * as S from "./ProductList.styles";
import { useEffect, useState } from "react";
// UI
import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// Component
import HeartIcon01 from "../../../commons/icon/heart/01";
import TagsView01 from "../../../commons/tags/view/01";
// Type
import type { IUseditem } from "../../../../commons/types/generated/types";

export default function ProductList(): JSX.Element {
  const [product, setProduct] = useState<IUseditem[]>([]);

  useEffect(() => {
    const todayView: IUseditem[] = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    setProduct(todayView);
  }, []);

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
            {/* <S.ItemTags>{el.tags?.map((tags) => <span key={tags}>#{tags}</span>)}</S.ItemTags> */}
            <TagsView01 tags={el.tags} />
          </S.ViewItem>
        ))}
      </S.TodayView>
    </S.Wrapper>
  );
}
