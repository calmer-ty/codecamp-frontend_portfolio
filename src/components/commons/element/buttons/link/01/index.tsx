import Link from "next/link";
import type { ILinkProps } from "./types";
import * as S from "./styles";

export default function LinkButton01(props: ILinkProps): JSX.Element {
  return (
    <Link href={props.href}>
      <S.A>
        <S.Img src="/images/board/list/ic_create.png"></S.Img>
        {props.text}
      </S.A>
    </Link>
  );
}
