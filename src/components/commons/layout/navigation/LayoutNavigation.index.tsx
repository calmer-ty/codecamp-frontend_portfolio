import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useFetchLoggedIn } from "../../hooks/queries/useFetchLoggedIn";
import { useLogoutUser } from "../../hooks/mutations/useLogoutUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

import { Dropdown, Space, type MenuProps } from "antd";
import UserIcon01 from "../../icon/user/01";
import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";

import * as S from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "Firebase", page: "/boards_firebase" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/products" },
  { name: "마이페이지", page: "/myPage" },
  { name: "랜덤강아지", page: "/randomDogImg" },
  { name: "OpenApi", page: "/openApi" },
];

export default function LayoutNavigation(): JSX.Element {
  const { data } = useFetchLoggedIn();
  const [logoutUser] = useLogoutUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleChangeIcon = () => {
    setIsOpen((prev) => !prev);
  };
  const handleNavOff = () => {
    setIsOpen(false);
  };
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

  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      console.log("onClickLogout을 눌렀어요", result);
      setAccessToken("");
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <S.FlexRow>
          <UserIcon01 size={30} padding={8} />
          <S.UserInfo>
            <div>{data?.fetchUserLoggedIn.name}</div>
            <div>100,000 P</div>
          </S.UserInfo>
        </S.FlexRow>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <button style={{ width: "100%" }} onClick={onClickLogout}>
          로그아웃
        </button>
      ),
      disabled: true,
    },
  ];

  return (
    <>
      <S.Navigation isOpen={isOpen}>
        {/* 네비게이션 메뉴 */}
        <S.Menus>
          {NAVIGATION_MENUS.map((el) => (
            <S.MenuItem key={el.page}>
              <Link href={el.page}>
                <S.itemLink onClick={handleNavOff}>{el.name}</S.itemLink>
              </Link>
            </S.MenuItem>
          ))}
        </S.Menus>
        {/* 회원가입/로그인 */}
        {accessToken === "" ? (
          <S.UserProcedure>
            <Link href={"/user/join"}>
              <S.UserOptBtn>회원가입</S.UserOptBtn>
            </Link>
            <Link href={"/user/login"}>
              <S.UserOptBtn>로그인</S.UserOptBtn>
            </Link>
          </S.UserProcedure>
        ) : (
          <S.FlexRow>
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
          </S.FlexRow>
        )}
      </S.Navigation>
      <S.NavToggleBtn onClick={handleChangeIcon} icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}></S.NavToggleBtn>
    </>
  );
}
