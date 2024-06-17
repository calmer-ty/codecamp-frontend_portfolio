import styled from "@emotion/styled";
import { mediaQueries } from "../../../../commons/styles/globalStyles";
import { css } from "@emotion/react";

export const CardWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px;
  border: 1px solid #bdbdbd;
  background-color: #fff;

  ${mediaQueries.desktop(css`
    padding: 100px 50px;
  `)}
`;
