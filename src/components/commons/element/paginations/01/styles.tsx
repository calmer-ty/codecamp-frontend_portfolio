import styled from "@emotion/styled";
import type { IPageBtnProps, IPageProps } from "./types";

export const Pagination = styled.article`
  display: flex;
`;
export const Page = styled.button`
  margin: 0px 10px;
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  color: ${(props: IPageProps) => (props.isActive ? "#219C90" : "#4F4F4F")};
  :hover {
    color: #219c90;
  }
`;
export const PageBtn = styled.button`
  opacity: ${(props: IPageBtnProps) => (props.isDisabled ? "0" : "1")};
  cursor: ${(props: IPageBtnProps) => (props.isDisabled ? "initial" : "pointer")};
  :hover {
    color: #219c90;
  }
`;
