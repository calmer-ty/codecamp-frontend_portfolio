import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

interface ILayoutProps {
  children: JSX.Element;
}
const LayoutBody = styled.div`
  margin: 55px 0;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
