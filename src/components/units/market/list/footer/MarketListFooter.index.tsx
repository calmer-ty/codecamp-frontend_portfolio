import Link from "next/link";
import * as S from "./MarketListFooter.styles";

export default function MarketListFooter() {
  return (
    <S.Footer>
      <Link href={"/markets/new"}>
        <S.LinkBtn>
          <img src="/images/board/list/ic_create.png" />
          상품 등록하기
        </S.LinkBtn>
      </Link>
    </S.Footer>
  );
}
