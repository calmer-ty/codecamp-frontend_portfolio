import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.article`
  margin: 150px auto;
`;
export const Container = styled.div`
  width: 1024px;
  padding: 50px;
  border-radius: 20px;
  border: 8px solid #59b4c3;
  background-color: #ffffff;

  @media (max-width: 1024px) {
    width: 480px;
  }
`;

export const SliderItemWrap = styled.div`
  /* 슬랙의 스타일이 겹치기 때문에 상위요소 생성 */
`;
export const SliderItem = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin: 0 20px 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 40px;
  }
`;
export const PageInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  column-gap: 20px;
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
  /* height: 350px; */
  object-position: top;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CustomSlider = styled(Slider)`
  /* 슬라이드 전체 */
  .slick-slide {
    /* background: #ccc; */
  }

  /* 내비게이션 버튼 */
  .slick-prev:before,
  .slick-next:before {
    color: #211c6a;
    font-size: 30px;
  }

  /* 하단 도트 */
  .slick-dots li button:before {
    /* color: blue; */
    font-size: 12px;
  }

  /* 하단 도트 -활성화 시- */
  .slick-dots li.slick-active button:before {
    color: #211c6a;
  }
`;
