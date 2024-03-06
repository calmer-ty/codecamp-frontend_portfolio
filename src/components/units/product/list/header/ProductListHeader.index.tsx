import Link from "next/link";
// Hooks
import { useFetchProductsBest } from "../../../../commons/hooks/queries/useFetchProductsBest";
// Component
import HeartIcon01 from "../../../../commons/icon/heart/01";
// Style
import * as S from "./ProductListHeader.styles";
// Type
import type { IProductListProps } from "../ProductList.types";

export default function ProductListHeader(props: IProductListProps): JSX.Element {
  const { data } = useFetchProductsBest();
  return (
    <S.Header>
      <S.Title>베스트 상품</S.Title>
      <S.ListWrap>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <S.List key={el._id}>
            <Link href={`/products/${el._id}`}>
              <a onClick={props.onClickTodayView(el)}>
                <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
              </a>
            </Link>
            <Link href={`/products/${el._id}`}>
              <S.ItemTitle onClick={props.onClickTodayView(el)}>{el.name}</S.ItemTitle>
            </Link>
            <S.ItemRemark>{el.remarks}</S.ItemRemark>
            <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>

            <S.Like>
              <HeartIcon01 size={20} />
              <span>{el.pickedCount}</span>
            </S.Like>
          </S.List>
        ))}
      </S.ListWrap>
    </S.Header>
  );
}
