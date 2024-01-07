import styled from "@emotion/styled";
import type { IMemberButton } from "./LayoutHeader.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 58px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;
export const Logo = styled.img``;

export const MemberBtn = styled.button`
  width: 92px;
  height: 44px;
  border-radius: 10px;
  background-color: ${(props: IMemberButton) =>
    props.isLogin ? "#FFD600" : ""};
`;
