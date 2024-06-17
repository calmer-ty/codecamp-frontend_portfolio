import type { IEditButtonProps } from "./types";
import * as S from "./styles";

export default function EditButton01(props: IEditButtonProps): JSX.Element {
  return <S.EditButton size={60} onClick={props.onClick} />;
}
