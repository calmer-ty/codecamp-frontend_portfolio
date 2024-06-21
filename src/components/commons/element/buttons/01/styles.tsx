import styled from "@emotion/styled";
import type { IButtonProps } from "./types";

export const Button = styled.button`
  width: 180px;
  height: 52px;
  margin-top: 30px;
  background-color: ${(props: IButtonProps) => (props.isActive ? "yellow" : "lightgray")};
  font-weight: bold;
`;
