import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import type { MouseEvent } from "react";

export interface LayoutNavigationUIProps {
  onClickMenu: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function LayoutNavigationUI(
  props: LayoutNavigationUIProps
): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
    { name: "랜덤강아지", page: "/randomDogImg" },
    { name: "OpenApi", page: "/openApi" },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} key={el.page} onClick={props.onClickMenu}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
