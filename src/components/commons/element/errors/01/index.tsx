import type { IErrorProps } from "./types";
import * as S from "./styles";

export default function Error01(props: IErrorProps): JSX.Element {
  return <S.Error>{props.text}</S.Error>;
}
