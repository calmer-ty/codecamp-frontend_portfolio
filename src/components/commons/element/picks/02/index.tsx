import type { IPickedProps } from "./types";
import * as S from "./styles";

export default function Pick02(props: IPickedProps): JSX.Element {
  return (
    <S.LikeRate>
      <S.IconHeart />
      <span>{props.text}</span>
    </S.LikeRate>
  );
}
