import { useMoveToPage } from "../../../hooks/customs/useMoveToPage";
import type { IButtonProps } from "./types";
import * as S from "./styles";

export default function Button02(props: IButtonProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Button onClick={onClickMoveToPage(props.path)}>
      <S.Img src="/images/board/list/ic_create.png"></S.Img>
      {props.text}
    </S.Button>
  );
}
