import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BestProduct = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
`;

export const CustomSlider = styled(Slider)`
  margin-bottom: 50px;
  .slick-track {
    display: flex;
    column-gap: 10px;
  }
  .slick-arrow {
    width: 24px;
    height: 24px;
  }
  .slick-arrow::before {
    color: #1679ab;
    font-size: 24px;
  }
`;

export const ListItem = styled.a`
  display: block;
  padding: 30px;
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  position: relative;
  cursor: pointer;
  &:hover {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
`;

export const ItemFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 10px;
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
