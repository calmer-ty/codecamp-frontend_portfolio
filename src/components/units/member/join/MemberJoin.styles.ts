import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
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
export const InputTitle = styled.div`
  margin-bottom: 12px;
`;
export const JoinInput = styled.input`
  height: 64px;
  padding-left: 16px;
  border-radius: 16px;
`;
export const Error = styled.div`
  height: 20px;
  color: #f00;
  margin-top: 4px;
  margin-left: 16px;
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
