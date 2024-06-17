import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQueries } from "../../../../../commons/styles/globalStyles";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 52px;

  ${mediaQueries.tablet(css`
    justify-content: flex-start;
  `)}
`;
export const MoveBtnIcon = styled.img`
  margin-right: 8px;
`;
export const ButtonWrap = styled.div`
  position: absolute;
  right: 0;
`;
