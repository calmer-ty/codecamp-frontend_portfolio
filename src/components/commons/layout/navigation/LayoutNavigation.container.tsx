import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import type { MouseEvent } from "react";
export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    void router.push(event.currentTarget.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
