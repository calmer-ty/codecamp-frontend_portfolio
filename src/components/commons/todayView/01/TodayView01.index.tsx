// Component
import { memo, useEffect, useState } from "react";
import Picked01 from "../../picked/01";
import TagsView01 from "../../tags/view/01";
// Type
import type { IUseditem } from "../../../../commons/types/generated/types";
// Style
import * as S from "./TodayView01.styles";

function TodayView01(): JSX.Element {
  const [product, setProduct] = useState<IUseditem[]>([]);

  useEffect(() => {
    const todayView: IUseditem[] = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    setProduct(todayView);
  }, []);
  return (
    <S.TodayView>
      <S.ViewTitle>오늘 본 상품</S.ViewTitle>
      {product.map((el) => (
        <S.ViewItem key={el._id}>
          <Picked01 text={el.pickedCount} />
          <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
          <S.ItemName title={el.name}>{el.name}</S.ItemName>
          <S.ItemRemark title={el.remarks}>{el.remarks}</S.ItemRemark>
          <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>
          <TagsView01 tags={el.tags} />
        </S.ViewItem>
      ))}
    </S.TodayView>
  );
}
export default memo(TodayView01);
