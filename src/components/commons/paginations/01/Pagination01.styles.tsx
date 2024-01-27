import styled from "@emotion/styled";
import type { IPageBtnProps, IPageProps } from "./Pagination01.types";

export const Wrapper = styled.div`
  display: flex;
`;
export const Page = styled.button`
  /* opacity: ${(props: IPageProps) => (props.isActive ? "1" : "0")}; */
  margin: 0px 10px;
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  color: ${(props: IPageProps) => (props.isActive ? "#FFD600" : "#4F4F4F")};
  :hover {
    color: #ffd600;
  }
`;
export const PageBtn = styled.button`
  opacity: ${(props: IPageBtnProps) => (props.onDisable ? "0" : "1")};
  cursor: ${(props: IPageBtnProps) =>
    props.onDisable ? "initial" : "pointer"};
  :hover {
    color: #ffd600;
  }
`;
