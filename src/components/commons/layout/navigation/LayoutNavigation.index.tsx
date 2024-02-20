import * as S from "./LayoutNavigation.styles";
import Link from "next/link";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { Fragment } from "react";

const NAVIGATION_MENUS = [
  { name: "Firebase", page: "/boards_firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/myPage" },
  { name: "랜덤강아지", page: "/randomDogImg" },
  { name: "OpenApi", page: "/openApi" },
];
export default function LayoutNavigation(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.Container>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <Link href={el.page}>
              <S.MenuItem onClick={onClickMoveToPage(el.page)}>{el.name}</S.MenuItem>
            </Link>
          </Fragment>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
