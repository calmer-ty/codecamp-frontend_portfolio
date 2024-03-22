import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.index";
import LayoutNavigation from "./navigation/LayoutNavigation.index";

interface ILayoutProps {
  children: JSX.Element;
}
const LayoutBody = styled.div`
  padding: 74px 0;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  console.log("========== Layout 렌더링 됩니다 ==========");
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
