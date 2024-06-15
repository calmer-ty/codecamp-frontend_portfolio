import LinkButton01 from "../../../../commons/element/buttons/link/01";

import type { IBoardDetailFooterProps } from "../BoardList.types";
import * as S from "./BoardListFooter.styles";

export default function BoardListFooter(props: IBoardDetailFooterProps): JSX.Element {
  return (
    <S.Footer>
      <>{props.children}</>
      <LinkButton01 text="게시물 등록하기" href="/boards/new" />
    </S.Footer>
  );
}
