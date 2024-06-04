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
  }
  html,
  body {
    height: 100%;
    font-family: "NotoSansKR-Regular", sans-serif;
  }
  ul,
  ol,
  li {
    list-style-type: none;
  }
  #__next {
    position: relative;
    min-height: 100%; /* wrap에 해당 되는 요소를 최소 높이값을 100%로 잡는다 */
    background: url("/images/bg_intro_1920.jpg") no-repeat center / cover fixed; /* attachment fixed 하여 배경이미지 크기를 고정시킨다 */
    display: flex;
    flex-direction: column;
  }
  /* #__next::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3) center/cover no-repeat;
    background-size: cover;
    z-index: 0;
  } */

  main > article,
  main > section {
    width: 1280px;
  }

  button {
    border: none;
    background-color: initial;
    cursor: pointer;
  }
`;
