import Link from "next/link";
// Component
import HeartIcon01 from "../../../../commons/icon/heart/01";
import DataOutputString01 from "../../../../commons/data/output/string/01";
// Style
import * as S from "./ProductListHeader.styles";
// Type
import type { IProductListHeaderProps } from "../ProductList.types";

export default function ProductListHeader(props: IProductListHeaderProps): JSX.Element {
  return (
    <S.Header>
      <S.Title>베스트 상품</S.Title>
      <S.ListWrap>
        {props.dataProductsBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.List key={el._id}>
            <Link href={`/products/${el._id}`}>
              <a>
                <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
              </a>
            </Link>
            <Link href={`/products/${el._id}`}>
              <S.ItemTitle>{el.name}</S.ItemTitle>
            </Link>
            <DataOutputString01 text={el.remarks} />
            <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>
            <S.Picked>
              <HeartIcon01 size={20} />
              <span>{el.pickedCount}</span>
            </S.Picked>
          </S.List>
        ))}
      </S.ListWrap>
    </S.Header>
  );
}
