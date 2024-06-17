import * as S from "./styles";
import type { IButtonProps } from "./types";

export default function Button03(props: IButtonProps): JSX.Element {
  return <S.Button>{props.text}</S.Button>;
}
