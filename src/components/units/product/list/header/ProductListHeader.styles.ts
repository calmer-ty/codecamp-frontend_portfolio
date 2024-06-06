import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BestProduct = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 40px 40px;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
`;

export const CustomSlider = styled(Slider)`
  .slick-slide {
  }
  .slick-arrow {
    width: 24px;
    height: 24px;
  }
  .slick-arrow::before {
    color: #1679ab;
    font-size: 24px;
  }
  .slick-arrow.slick-prev {
    left: -26px;
  }
  .slick-arrow.slick-next {
    right: -26px;
  }
  .slick-dots {
    bottom: -30px;
  }
`;

export const ListItem = styled.a`
  display: block;
  padding: 20px;
  margin: 0 10px;
  background-color: #f9f9f9;
  border: 1px solid #f1f1f1;
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
