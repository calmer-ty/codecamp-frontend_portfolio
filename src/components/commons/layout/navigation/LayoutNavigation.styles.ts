import styled from "@emotion/styled";
import type { INavLink } from "./LayoutNavigation.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #ffd600;
`;
export const Container = styled.div``;
export const Nav = styled.div`
  display: flex;
`;
export const NavLink = styled.button`
  padding: 0 40px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props: INavLink) => (props.isActive ? "#514400" : "#AB9000")};
`;
export const NavLine = styled.div`
  width: 1px;
  background-color: white;
`;
