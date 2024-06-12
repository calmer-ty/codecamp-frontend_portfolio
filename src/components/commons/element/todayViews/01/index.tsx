import Link from "next/link";
import { useEffect, useState } from "react";

import type { IUseditem } from "../../../../../commons/types/generated/types";
import * as S from "./styles";

export default function TodayView01(): JSX.Element {
  const [product, setProduct] = useState<IUseditem[]>([]);

  useEffect(() => {
    const todayView: IUseditem[] = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    setProduct(todayView);
  }, []);

  return (
    <S.TodayView>
      <S.Title>오늘 본 상품</S.Title>
      <S.ViewItems>
        {product.map((el) => (
          <Link key={el._id} href={`/products/${el._id}`}>
            <S.ViewItem>
              <S.MainImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
              <S.ItemName title={el.name}>{el.name}</S.ItemName>
            </S.ViewItem>
          </Link>
        ))}
      </S.ViewItems>
    </S.TodayView>
  );
}
