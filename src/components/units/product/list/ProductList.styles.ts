import styled from "@emotion/styled";

export const ProductList = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 40px;
  background-color: #fff;
  border-radius: 30px;
  min-width: 1024px;

  @media screen and (max-width: 1024px) {
    min-width: 768px;
  }
  @media screen and (max-width: 768px) {
    min-width: 480px;
  }
`;
