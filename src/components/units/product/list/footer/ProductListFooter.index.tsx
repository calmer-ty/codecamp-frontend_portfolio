import * as S from "./ProductListFooter.styles";
import { LinkButton01 } from "../../../../commons/element/buttons/link/01";

export default function ProductListFooter() {
  return (
    <S.Footer>
      <LinkButton01 text="상품 등록하기" href="/products/new" />
    </S.Footer>
  );
}
