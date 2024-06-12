import type { IPickedProps } from "./types";
import * as S from "./styles";
import { HeartFilled } from "@ant-design/icons";

export default function Pick01(props: IPickedProps): JSX.Element {
  return (
    <S.LikeRate>
      {/* <S.IconHeart /> */}
      <HeartFilled size={40} />
      <span>{props.text}</span>
    </S.LikeRate>
  );
}
