import Link from "next/link";
import { useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

import { useFetchLoggedIn } from "../../hooks/queries/useFetchLoggedIn";
import { useLogoutUser } from "../../hooks/mutations/useLogoutUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

import { Dropdown, Space } from "antd";
import { CloseOutlined, DownOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import UserIcon01 from "../../icon/user/01";

import { FETCH_BOARDS } from "../../hooks/queries/board/useFetchBoards";
import { FETCH_USEDITEMS } from "../../hooks/queries/product/useFetchProducts";
import { FETCH_USEDITEMS_BEST } from "../../hooks/queries/product/useFetchProductsBest";

import type { DocumentNode } from "graphql";

import * as S from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "Firebase", page: "/boards_firebase" },
  { name: "자유게시판", page: "/boards", fetch: [FETCH_BOARDS] },
  { name: "중고마켓", page: "/products", fetch: [FETCH_USEDITEMS, FETCH_USEDITEMS_BEST] },
  { name: "마이페이지", page: "/myPage" },
  { name: "랜덤강아지", page: "/randomDogImg" },
  { name: "OpenApi", page: "/openApi" },
];
const USER_OPTIONS = [
  { name: "회원가입", page: "/user/join" },
  { name: "로그인", page: "/user/login" },
];

export default function LayoutNavigation(): JSX.Element {
  const { data } = useFetchLoggedIn();
  const [logoutUser] = useLogoutUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isOpen, setIsOpen] = useState(false);

  // Prefetch
  const client = useApolloClient();
  const prefetchProduct = (fetch?: DocumentNode[]) => async () => {
    if (fetch === undefined) {
      return; // fetch가 없는 경우 종료
    }
    try {
      const fetchQueries = Object?.values(fetch).map(async (query) => {
        console.log(query);
        const response = await client.query({ query });
        return response;
      });
      const responses = await Promise.all(fetchQueries);
      console.log(responses);
    } catch (error) {
      console.error("Error prefetching product:", error);
    }
  };

  // Nav Toggle Button
  const handleChangeIcon = () => {
    setIsOpen((prev) => !prev);
  };
  // Nav Menu Router push시, rightNav 사라짐
  const handleMovedNavOff = () => {
    setIsOpen(false);
  };

  // // PC 해상도일 때, sideNav가 켜져있다면 초기화
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1390px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false); // 초기화할 상태 값 설정
      }
    };
    // Add listener to handle changes
    mediaQuery.addListener(handleMediaQueryChange);
    // Initial check
    if (mediaQuery.matches) {
      setIsOpen(false); // 초기화할 상태 값 설정
    }
    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  // 로그아웃
  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      console.log("onClickLogout을 눌렀어요", result);
      setAccessToken("");
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  // 로그인 시 유저 정보 팝업
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <S.UserInfoModal>
          <UserIcon01 size={30} padding={8} />
          <div>
            <div>{data?.fetchUserLoggedIn.name}</div>
            <div>100,000 P</div>
          </div>
        </S.UserInfoModal>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <S.LogoutBtn onClick={onClickLogout}>로그아웃</S.LogoutBtn>,
      icon: <UserOutlined />,
      danger: true,
    },
  ];

  return (
    <>
      <S.NavigationWrap isOpen={isOpen}>
        <S.Navigation>
          {/* 네비게이션 메뉴 */}
          <S.Menus>
            {NAVIGATION_MENUS.map((el) => (
              <S.MenuItem key={el.page}>
                <Link href={el.page}>
                  <S.itemLink onClick={handleMovedNavOff} onMouseOver={prefetchProduct(el.fetch)}>
                    {el.name}
                  </S.itemLink>
                </Link>
              </S.MenuItem>
            ))}
          </S.Menus>

          {/* 회원가입/로그인 */}
          {accessToken === "" ? (
            <S.UserProcedure>
              {USER_OPTIONS.map((el) => (
                <Link key={el.page} href={el.page}>
                  <S.UserOptBtn onClick={handleMovedNavOff}>{el.name}</S.UserOptBtn>
                </Link>
              ))}
            </S.UserProcedure>
          ) : (
            <S.UserInfo>
              <Dropdown menu={{ items }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Space>
                    <S.UserName>{data?.fetchUserLoggedIn.name}</S.UserName> 님
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </S.UserInfo>
          )}
        </S.Navigation>
      </S.NavigationWrap>
      <S.NavToggleBtn onClick={handleChangeIcon} icon={isOpen ? <CloseOutlined style={{ fontSize: "24px" }} /> : <MenuOutlined style={{ fontSize: "24px" }} />}></S.NavToggleBtn>
    </>
  );
}
