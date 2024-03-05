import styled from "@emotion/styled";
// Library
import { Rate } from "antd";

export const QuestionWrite = styled.article`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 40px 0;
  border-top: 1px solid #bdbdbd;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  column-gap: 24px;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
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
