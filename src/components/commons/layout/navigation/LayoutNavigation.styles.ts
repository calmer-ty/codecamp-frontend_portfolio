import styled from "@emotion/styled";
import { Button } from "antd";

import type { IMenus } from "./LayoutNavigation.types";

export const NavigationWrap = styled.nav`
  display: flex;
  @media (max-width: 1390px) {
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    transform: ${(props: IMenus) => (props.isOpen ? "0" : "translateX(100%)")};
    z-index: 1;
  }
`;
export const Navigation = styled.div`
  display: flex;
  column-gap: 20px;
  height: 100%;
  @media (max-width: 1390px) {
    width: 240px;
    align-items: center;
    flex-direction: column;
    background-color: #000;
  }
`;
export const NavToggleBtn = styled(Button)`
  display: none;
  position: absolute;
  top: 26px;
  right: 20px;
  z-index: 1;
  @media (max-width: 1390px) {
    display: block;
  }
`;

export const Menus = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  /* 오른쪽 요소 분리를 위한 css */
  border-right: 2px solid #000;
  @media (max-width: 1390px) {
    flex-direction: column;
    row-gap: 20px;
    margin: 80px 0 40px 0;

    /* 오른쪽 요소 분리를 위한 css */
    border-right: none;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  width: max-content;
  font-size: 18px;
  font-weight: 700;
`;
export const itemLink = styled.a`
  cursor: pointer;
  &:hover {
    color: #74e291;
  }
`;

// 로그인/회원가입 요소 스타일
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProcedure = styled.div`
  display: flex;

  @media (max-width: 1390px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    align-items: center;

    /* 상단 요소와 분리하기 위한 css */
    border-top: 2px solid #fff;
    padding-top: 20px;
    margin: 0 40px;
  }
`;

// 로그인 후 유저 요소
export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const UserName = styled.span`
  font-weight: bold;
`;
export const UserInfoModal = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const UserOptBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 86px;
  width: max-content;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #74e291;
  }
`;
export const LogoutBtn = styled.button`
  width: 100%;
  color: inherit;
`;
