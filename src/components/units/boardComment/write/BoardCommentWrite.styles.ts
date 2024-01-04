import styled from "@emotion/styled";
// Library
import { Rate } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1200px; */
  border-top: 1px solid #bdbdbd;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin-bottom: 20px;
`;

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

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  column-gap: 24px;
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
`;
export const Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
`;
export const Like = styled(Rate)``;
export const Content = styled.div`
  position: relative;
  width: 1200px;
  height: 161px;
`;
export const ContentTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  padding: 20px;
`;
export const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 91px;
  height: 52px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;
