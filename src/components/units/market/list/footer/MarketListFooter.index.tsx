import Link from "next/link";
import * as S from "./MarketListFooter.styles";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";

export default function MarketListFooter() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Footer>
      <Link href={"/markets/new"}>
        <S.LinkBtn onClick={onClickMoveToPage("/markets/new")}>
          <img src="/images/board/list/ic_create.png" />
          상품 등록하기
        </S.LinkBtn>
      </Link>
    </S.Footer>
  );
}
