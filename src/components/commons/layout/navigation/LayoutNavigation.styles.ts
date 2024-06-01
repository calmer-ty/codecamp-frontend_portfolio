import styled from "@emotion/styled";
import { Button } from "antd";

import type { IMenus } from "./LayoutNavigation.types";

export const Navigation = styled.nav`
  display: flex;
  /* justify-content: space-around; */
  @media (max-width: 1390px) {
    flex-direction: column;
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    transform: ${(props: IMenus) => (props.isOpen ? "0" : "translateX(200px)")};
  }
`;
export const Menus = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1390px) {
    flex-direction: column;
    row-gap: 20px;
    margin: 80px 0 40px 0;
    /* 

    z-index: 1;
    padding: 20px 0;
    background-color: #eee;
    
    transition: right 0.3s ease;
    
    */
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
`;

// 로그인/회원가입 요소 스타일
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProcedure = styled.div`
  display: flex;

  /* 왼쪽 요소 분리를 위한 border */
  border-left: 2px solid #000;
  padding-left: 10px;
  @media (max-width: 1390px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    align-items: center;

    /* 왼쪽 요소 분리를 위한 border */
    padding-left: 0;
    padding-top: 20px;
    border-left: none;
    border-top: 2px solid #fff;
    margin: 0 40px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  font-weight: bold;
`;
export const UserName = styled.span`
  font-weight: bold;
`;
export const UserInfoModal = styled.div`
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
