import styled from "@emotion/styled";
import Picked01 from "../../../../commons/picked/01";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BestProduct = styled.article`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
`;
export const ListItem = styled.a`
  display: block;
  /* width: 280px; */
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #f1f1f1;
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

export const CustomSlider = styled(Slider)`
  /* 슬라이드 전체 */
  .slick-track {
    display: flex;
    column-gap: 10px;
  }
`;
