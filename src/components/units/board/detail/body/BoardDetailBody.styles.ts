import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 60px;

  position: relative;
`;
export const Title = styled.h2`
  width: 100%;
  margin-top: 30px;
  font-size: 36px;
  font-weight: 700;
`;

export const Contents = styled.div``;

export const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;
export const LikeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 50px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
`;
export const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  cursor: pointer;
`;

// 슬라이드
export const CustomSlider = styled(Slider)`
  .slick-arrow.slick-prev {
    left: -40px;
  }
  .slick-arrow.slick-next {
    right: -28px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    color: #1679ab;
  }
`;
export const ImgItem = styled.img`
  object-fit: cover;
`;

export const LikeScore = styled.div``;
export const Youtube = styled(ReactPlayer)`
  width: 100% !important;
  max-height: 480px;
`;
export const LikeIcon = styled(LikeOutlined)``;
export const DislikeIcon = styled(DislikeOutlined)``;
