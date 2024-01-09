import styled from "@emotion/styled";
import type { IPageProps } from "./Pagination.types";

export const Wrapper = styled.div`
  display: flex;
`;
export const Page = styled.button`
  font-weight: ${(props: IPageProps) => (props.isActive ? "700" : "")};
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "")};
`;
