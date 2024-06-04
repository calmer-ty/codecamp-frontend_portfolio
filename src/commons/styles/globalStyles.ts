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
  a {
    text-decoration: none;
  }
  #__next {
    position: relative;
    min-height: 100%; /* wrap에 해당 되는 요소를 최소 높이값을 100%로 잡는다 */
    /* attachment fixed 하여 배경이미지 크기를 고정시킨다 */
    /* background: url("/images/bg_intro_1920.jpg") no-repeat center / cover fixed;  */
    background-color: #f1f5f8;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  /* #__next::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5) center/cover no-repeat;
    background-size: cover;
    z-index: -1;
  } */

  main > article,
  main > section {
    width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    main > article,
    main > section {
      width: 768px;
    }
  }
  @media screen and (max-width: 768px) {
    main > article,
    main > section {
      width: 480px;
    }
  }

  button {
    border: none;
    background-color: initial;
    cursor: pointer;
  }
`;
