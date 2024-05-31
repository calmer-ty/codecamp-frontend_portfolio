import styled from "@emotion/styled";

export const Wrapper = styled.article`
  /* &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  } */
  display: flex;
  flex-direction: column;
  background: url("/images/bg_intro_1920.jpg") no-repeat center/cover;
`;
export const LayoutBody = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
