import Link from "next/link";
import * as S from "./ProductListFooter.styles";

export default function ProductListFooter() {
  return (
    <S.Footer>
      <Link href={"/products/new"}>
        <S.LinkBtn>
          <img src="/images/board/list/ic_create.png" />
          상품 등록하기
        </S.LinkBtn>
      </Link>
    </S.Footer>
  );
}
