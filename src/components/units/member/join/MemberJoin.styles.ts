import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
`;
export const Title = styled.div`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: bold;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SubmitBtn = styled.button`
  width: 100%;
  height: 64px;
  margin-top: 20px;
  border-radius: 16px;
  font-weight: bold;
  background-color: #4f4f4f;
  color: #fff;
`;
