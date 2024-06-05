import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Contents = styled.article`
  width: 100%;
`;
export const CustomSlider = styled(Slider)``;
export const SliderInner = styled.div``;

export const SliderItem = styled.figure`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  padding: 30px;
  border: 3px solid #000;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 40px;
  }
`;
export const ItemFigcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  column-gap: 20px;
  height: 300px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
export const Desc = styled.div`
  font-size: 24px;
  word-break: keep-all;
`;
export const PageMainImg = styled.img`
  width: 40%;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// export const CustomSlider = styled(Slider)`
//   /* 슬라이드 전체 */
//   /* .slick-track {
//     display: flex;
//   } */

//   /* 내비게이션 버튼 */
//   .slick-prev:before,
//   .slick-next:before {
//     color: #211c6a;
//     font-size: 30px;
//   }

//   /* 하단 도트 */
//   .slick-dots li button:before {
//     font-size: 12px;
//   }

//   /* 하단 도트 -활성화 시- */
//   .slick-dots li.slick-active button:before {
//     color: #211c6a;
//   }
// `;
