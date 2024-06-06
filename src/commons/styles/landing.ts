import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Contents = styled.section`
  width: 100%;
`;

export const CustomSlider = styled(Slider)`
  .slick-track {
    padding: 10px 0;
  }
  .slick-slide.slick-center article {
    box-shadow: 0px 8px 6px -6px #666;
    border: 1px solid #666;
    opacity: 1;
  }
  .slick-arrow {
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .slick-arrow::before {
    color: #1679ab;
    font-size: 30px;
  }
  .slick-arrow.slick-prev {
    left: 20px;
  }
  .slick-arrow.slick-next {
    right: 20px;
  }
  .slick-dots {
    bottom: -35px;
  }
`;

export const SliderInner = styled.div``;

export const SliderItem = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  margin: 0 10px;
  padding: 30px;
  background-color: #fff;
  opacity: 0.6;
`;
export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;
export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
`;
export const Figcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 1.2rem;
  word-break: keep-all;
`;
export const Desc = styled.p`
  height: 56px;
`;
export const MainImg = styled.img`
  object-fit: cover;
`;
