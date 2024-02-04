import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

interface ILayoutProps {
  children: JSX.Element;
}
const LayoutBody = styled.div`
  padding: 74px 0;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      {/* {isLogState === true && <LayoutHeader />} */}
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
