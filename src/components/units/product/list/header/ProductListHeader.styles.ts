import styled from "@emotion/styled";
import Picked01 from "../../../../commons/picked/01";

export const BestProduct = styled.article`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
  color: #fff;
`;
export const ProductList = styled.div`
  height: 400px;
  display: flex;
  justify-content: space-between;
`;
export const ListItem = styled.a`
  width: 280px;
  padding: 30px;
  background-color: #f9f9f9;
  box-shadow: 2px 2px 3px #cdcdcd;
  cursor: pointer;
  :hover {
    background-color: #dedede;
    box-shadow: none;
    color: blue;
  }
`;

export const ItemFigure = styled.figure`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const ItemFigcaption = styled.figcaption`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;

  /* ...  */
  white-space: nowrap; /* 텍스트가 한 줄로만 표시되도록 설정 */
  overflow: hidden; /* 텍스트가 영역을 넘어가면 숨김 처리 */
  text-overflow: ellipsis; /* 넘어가는 텍스트를 ...으로 표시 */
`;
export const ItemRemark = styled.p`
  /* ...  */
  white-space: nowrap; /* 텍스트가 한 줄로만 표시되도록 설정 */
  overflow: hidden; /* 텍스트가 영역을 넘어가면 숨김 처리 */
  text-overflow: ellipsis; /* 넘어가는 텍스트를 ...으로 표시 */
`;
export const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
export const StyledPicked01 = styled(Picked01)`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
