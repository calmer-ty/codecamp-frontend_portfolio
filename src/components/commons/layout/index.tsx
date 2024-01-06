import LayoutBanner from "./banner";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ margin: "55px 0" }}>{props.children}</div>
    </>
  );
}
