import { css } from "@emotion/react";

export const globalStyles = css`
  /* 폰트 */
  @font-face {
    font-family: "NotoSansKR-Regular";
    src: url("/fonts/NotoSansKR-Regular.ttf");
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "NotoSansKR-Regular", sans-serif;
  }
  button {
    border: none;
    background-color: initial;
    cursor: pointer;
  }
`;
