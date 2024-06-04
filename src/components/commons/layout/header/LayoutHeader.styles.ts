import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  display: block;
`;
