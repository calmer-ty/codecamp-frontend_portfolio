import type { ITitleProps } from "./types";
import * as S from "./styles";

export default function TitleComment01(props: ITitleProps): JSX.Element {
  return (
    <S.Title>
      <S.TitleImg src="/images/comment/write/ic_logo.png" />
      {props.text}
    </S.Title>
  );
}
