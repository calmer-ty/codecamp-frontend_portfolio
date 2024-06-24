// import Link from "next/link";
import { useEffect, useState } from "react";

import type { IUseditem } from "../../../../../commons/types/generated/types";
import * as S from "./styles";
import ViewItem01 from "./viewItem";

export default function TodayView01(): JSX.Element {
  const [useditems, setUseditems] = useState<IUseditem[]>([]);

  useEffect(() => {
    const todayView: IUseditem[] = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    setUseditems(todayView);
  }, []);

  return (
    <S.TodayView>
      <S.Title>오늘 본 상품</S.Title>
      <S.ViewItems>
        {useditems.map((useditem, index) => (
          <ViewItem01 key={`${useditem._id}_${index}`} useditemId={useditem._id} />
        ))}
      </S.ViewItems>
    </S.TodayView>
  );
}
