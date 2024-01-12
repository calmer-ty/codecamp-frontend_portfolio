import styled from "@emotion/styled";
// Library
import { Rate } from "antd";

// Layout
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 40px 0;
`;
export const RowWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  column-gap: 24px;
`;

// title
export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  font-size: 18px;
  font-weight: 500;
`;
export const TitleImg = styled.img`
  margin-right: 12px;
`;

// Info
export const InfoInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
`;
export const RateScore = styled(Rate)``;

// Contents
export const ContentsWrap = styled.div`
  position: relative;
  width: 1200px;
  /* height: 161px; */
  border: 1px solid #bdbdbd;
`;
export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: 0;
`;
export const ContentsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f2f2f2;
`;
export const ContentsLength = styled.div`
  margin: 0 20px;
  color: #bdbdbd;
`;
// Btn
export const SubmitBtn = styled.button`
  /* position: absolute;
  right: 0;
  bottom: 0; */
  width: 91px;
  height: 52px;
  background-color: #000;
  color: #fff;
`;
