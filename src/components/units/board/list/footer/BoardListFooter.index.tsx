import Link from "next/link";
import * as S from "./BoardListFooter.styles";
import type { IBoardDetailFooterProps } from "../BoardList.types";

export default function BoardListFooter(props: IBoardDetailFooterProps): JSX.Element {
  return (
    <S.Footer>
      <>{props.children}</>
      <Link href={"/boards/new"}>
        <S.LinkBtn>
          <img src="/images/board/list/ic_create.png" />
          게시물 등록하기
        </S.LinkBtn>
      </Link>
    </S.Footer>
  );
}
