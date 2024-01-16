import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props: any): JSX.Element {
  const NAVIGATION_MENUS = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
    { name: "무료API", page: "/freeApi" },
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
