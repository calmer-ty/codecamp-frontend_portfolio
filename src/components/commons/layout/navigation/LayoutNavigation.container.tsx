import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (page: string) => (): void => {
    void router.push(page);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
