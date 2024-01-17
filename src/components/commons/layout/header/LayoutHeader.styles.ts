import styled from "@emotion/styled";
import type { IMemberItem } from "./LayoutHeader.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 58px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;
export const Logo = styled.button`
  width: 236px;
  height: 36px;
  background: url("/images/layout/header/logo.png") no-repeat center/contain;
`;

export const MemberItem = styled.button`
  width: 92px;
  height: 44px;
  border-radius: 10px;
  background-color: ${(props: IMemberItem) => (props.isLogin ? "#FFD600" : "")};
`;
