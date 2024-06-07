import styled from "@emotion/styled";
import { Button } from "antd";

import type { IMenus } from "./LayoutNavigation.types";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { mediaQueries } from "../../../../commons/styles/globalStyles";
import { css } from "@emotion/react";

export const NavigationWrap = styled.nav`
  display: flex;

  @media (max-width: 1024px) {
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
  height: 100%;

  ${mediaQueries.desktop(css`
    width: 240px;
    align-items: center;
    flex-direction: column;
    background-color: #000;
  `)}
`;
export const NavToggleBtn = styled(Button)`
  display: none !important;
  position: absolute;
  top: 26px;
  right: 20px;
  z-index: 1;

  /* antd icon css 변경 */
  background: initial;
  border: none;
  &:hover {
    background: initial !important;
  }

  /* 메뉴바가 보임 */
  ${mediaQueries.desktop(css`
    display: block !important;
  `)}
`;

export const Menus = styled.ul`
  display: flex;
  justify-content: center;
  box-shadow: none;
  border: none;
  background-color: initial;
  align-items: center;

  /* 오른쪽 요소 분리를 위한 css */
  ${mediaQueries.desktop(css`
    flex-direction: column;
    row-gap: 20px;
    margin: 80px 0 40px 0;
  `)}
`;

export const MenuItem = styled.li`
  padding: 0 16px;
  width: max-content;
  font-size: 1.2rem;
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

export const UserProcedure = styled.ul`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 2px;
    height: 20px;
    background-color: #000;
  }

  ${mediaQueries.desktop(css`
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    align-items: center;

    &::before {
      width: 70px;
      height: 2px;
      background-color: #fff;
    }
  `)}
`;

export const MenuBtn = styled(MenuOutlined)`
  font-size: 24px !important;
  color: #000;
`;
export const CloseBtn = styled(CloseOutlined)`
  font-size: 24px !important;
  color: #fff;
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
  font-weight: bold;
  cursor: pointer;
`;

export const UserOptBtn = styled.a`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #74e291;
  }
`;
export const LogoutBtn = styled.button`
  width: 100%;
  color: inherit;
`;
