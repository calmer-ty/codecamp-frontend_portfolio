import LayoutHeader from "./header/LayoutHeader.index";

import * as S from "./styles";
import type { ILayoutProps } from "./types";

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <S.Wrapper>
      <LayoutHeader />
      <S.LayoutBody>{props.children}</S.LayoutBody>
    </S.Wrapper>
  );
}
