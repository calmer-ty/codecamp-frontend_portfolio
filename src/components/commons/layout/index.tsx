import LayoutHeader from "./header/LayoutHeader.index";
import * as S from "./styles";
import type { ILayoutProps } from "./types";

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <S.LayoutBody path={props.path}>{props.children}</S.LayoutBody>
    </>
  );
}
