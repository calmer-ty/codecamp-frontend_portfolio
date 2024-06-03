import { css } from "@emotion/react";

export const globalStyles = css`
  /* 폰트 */
  @font-face {
    font-family: "NotoSansKR-Regular";
    src: url("/fonts/NotoSansKR-Regular.ttf");
    font-weight: normal;
  }

  * {
  }
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "NotoSansKR-Regular", sans-serif;
    box-sizing: border-box;
  }
  #__next {
    min-height: 100%; /* wrap에 해당 되는 요소를 최소 높이값을 100%로 잡는다 */
    background: url("/images/bg_intro_1920.jpg") no-repeat center fixed; /* attachment fixed 하여 배경이미지 크기를 고정시킨다 */
    background-size: cover;
    display: flex;
    flex-direction: column;
  }

  button {
    border: none;
    background-color: initial;
    cursor: pointer;
  }
`;
