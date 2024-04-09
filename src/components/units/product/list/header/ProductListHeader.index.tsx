import Link from "next/link";

import { useFetchProductsBest } from "../../../../commons/hooks/queries/product/useFetchProductsBest";
import Picked01 from "../../../../commons/picked/01";

import * as S from "./ProductListHeader.styles";

export default function ProductListHeader(): JSX.Element {
  const { data } = useFetchProductsBest();
  return (
    <S.Header>
      <S.Title>베스트 상품</S.Title>
      <S.ListWrap>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <Link key={el._id} href={`/products/${el._id}`}>
            <S.List>
              <S.MainImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
              <S.ItemTitle>{el.name}</S.ItemTitle>
              <S.ItemRemark>{el.name}</S.ItemRemark>
              <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>
              <Picked01 text={el.pickedCount} />
            </S.List>
          </Link>
        ))}
      </S.ListWrap>
    </S.Header>
  );
}
