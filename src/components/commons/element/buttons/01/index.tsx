import type { IButtonProps } from "./types";
import * as S from "./styles";

export default function Button01(props: IButtonProps): JSX.Element {
  return <S.Button isActive={props.isActive}>{props.text}</S.Button>;
}
