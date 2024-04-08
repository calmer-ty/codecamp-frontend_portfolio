import LayoutHeader from "./header/LayoutHeader.index";
import LayoutNavigation from "./navigation/LayoutNavigation.index";

import * as S from "./styles";
import type { ILayoutProps } from "./types";

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <S.LayoutBody>{props.children}</S.LayoutBody>
    </>
  );
}
