import styled from "@emotion/styled";
import { Button } from "antd";

interface INavigation {
  isOpen: boolean;
}

export const Navigation = styled.nav`
  visibility: visible;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1390px) {
    flex-direction: column;
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${(props: INavigation) => (props.isOpen ? "0" : "-300px")};
    z-index: 1;
    padding: 20px 0;
    background-color: #eee;
    transition: right 0.3s ease;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  width: max-content;
  height: 100%;
  font-size: 18px;
  font-weight: 700;
`;
export const MenuItem = styled.a`
  cursor: pointer;
`;

// 로그인/회원가입 요소 스타일
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavUser = styled.div`
  display: flex;
  margin-left: 20px;
  cursor: pointer;
`;
export const UserName = styled.span`
  font-weight: bold;
`;
export const UserProcedure = styled.div`
  display: flex;

  @media (max-width: 1390px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  font-weight: bold;

  @media (max-width: 1390px) {
    flex-direction: column;
  }
`;
export const UserInfoModal = styled.div`
  cursor: pointer;
`;

export const LoginBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 44px;
  border-radius: 10px;
  font-weight: bold;
  background-color: #284b63;
  color: #ffffff;
  cursor: pointer;
`;
export const JoinBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 44px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const NavToggleBtn = styled(Button)`
  display: none;
  position: absolute;
  right: 20px;
  z-index: 1;
  @media (max-width: 1390px) {
    display: block;
  }
`;
