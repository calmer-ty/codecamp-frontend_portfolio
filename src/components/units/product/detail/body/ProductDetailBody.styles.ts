import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;

  position: relative;
`;

export const TextWrap = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;
export const Remark = styled.span`
  font-size: 18px;
  color: #bdbdbd;
`;
export const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
export const Price = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

// 슬라이드
export const CustomSlider = styled(Slider)`
  width: 100%;
  margin: 50px 0;
`;
export const ImgItem = styled.img`
  max-height: 400px;
  object-fit: contain;
`;
export const Pick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;

  position: absolute;
  top: 0;
  right: 0;
`;
export const Contents = styled.p``;

export const BtnWrap = styled.footer`
  display: flex;
  justify-content: center;
  padding: 80px 0 40px 0;
  column-gap: 24px;
  border-top: 1px solid #bdbdbd;
`;
export const LinkBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  cursor: pointer;
`;
