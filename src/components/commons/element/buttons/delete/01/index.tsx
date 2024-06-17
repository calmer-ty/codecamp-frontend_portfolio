import type { IDeleteButton01Props } from "./types";
import * as S from "./styles";

export default function DeleteBtn01(props: IDeleteButton01Props): JSX.Element {
  return <S.DeleteButton onClick={props.onClick} />;
}
