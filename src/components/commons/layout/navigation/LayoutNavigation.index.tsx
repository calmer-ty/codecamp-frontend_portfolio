import Link from "next/link";
import React, { Fragment, memo } from "react";
// Style
import * as S from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "Firebase", page: "/boards_firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/products" },
  { name: "마이페이지", page: "/myPage" },
  { name: "랜덤강아지", page: "/randomDogImg" },
  { name: "OpenApi", page: "/openApi" },
];

function LayoutNavigation(): JSX.Element {
  console.log("NAVI 렌더링 됩니다");
  return (
    <S.Wrapper>
      <S.Container>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <Link href={el.page}>
              <S.MenuItem>{el.name}</S.MenuItem>
            </Link>
          </Fragment>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}

export default memo(LayoutNavigation);
