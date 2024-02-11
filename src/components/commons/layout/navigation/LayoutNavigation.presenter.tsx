import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";

export interface LayoutNavigationUIProps {
  onClickMenu: (page: string) => () => void;
}

export default function LayoutNavigationUI(
  props: LayoutNavigationUIProps
): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: "Firebase", page: "/boards_firebase" },
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "마이페이지", page: "/myPage" },
    { name: "랜덤강아지", page: "/randomDogImg" },
    { name: "OpenApi", page: "/openApi" },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem onClick={props.onClickMenu(el.page)}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
