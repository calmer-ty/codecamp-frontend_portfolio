import type { IInputProps } from "./types";
import * as S from "./styles";

export default function Input01(props: IInputProps): JSX.Element {
  return <S.Input type={props.type ?? "text"} placeholder={props.placeholder} defaultValue={props.defaultValue} readOnly={props.readOnly} onChange={props.onChange} {...props.register} />;
}
