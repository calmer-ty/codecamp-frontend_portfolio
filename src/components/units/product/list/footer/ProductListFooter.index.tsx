import Link from "next/link";
import * as S from "./ProductListFooter.styles";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";

export default function ProductListFooter() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Footer>
      <Link href={"/products/new"}>
        <S.LinkBtn onClick={onClickMoveToPage("/products/new")}>
          <img src="/images/board/list/ic_create.png" />
          상품 등록하기
        </S.LinkBtn>
      </Link>
    </S.Footer>
  );
}
