import { useRouter } from "next/router";
import * as S from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "Firebase", page: "/boards_firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/myPage" },
  { name: "랜덤강아지", page: "/randomDogImg" },
  { name: "OpenApi", page: "/openApi" },
];
export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (page: string) => (): void => {
    void router.push(page);
  };
  return (
    <S.Wrapper>
      <S.Container>
        {NAVIGATION_MENUS.map((el) => (
          <S.MenuItem key={el.page} onClick={onClickMenu(el.page)}>
            {el.name}
          </S.MenuItem>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
