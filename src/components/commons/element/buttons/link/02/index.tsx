import Link from "next/link";
import * as S from "./styles";
import type { ILink02Props } from "./types";

export default function LinkButton02(props: ILink02Props): JSX.Element {
  return (
    <Link href={props.href}>
      <S.A>{props.text}</S.A>
    </Link>
  );
}
