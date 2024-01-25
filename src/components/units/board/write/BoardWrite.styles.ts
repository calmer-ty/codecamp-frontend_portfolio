import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "./BoardWrite.types";
// Library
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

// emotion은 태그로 쓰이기 때문에 대문자로 사용한다
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 40px;
  width: 1200px;
  padding: 100px 102px;
  border: 2px solid #bdbdbd;
  box-shadow: 5px 5px 5px #bdbdbd;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const ColWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;
export const Error = styled.div`
  height: 21px;
  margin-top: 7px;
  font-size: 16px;
  color: red;
`;
export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding: 0 12px;
`;
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding: 0 12px;
`;
export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding: 0 12px;
`;
export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 12px;
`;

export const ZipcodeWrap = styled.div`
  display: flex;
`;
export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding: 0 12px;
  text-align: center;
`;
export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
`;
export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 20px;
  padding: 0 12px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 46px;
  padding: 0 12px;
`;

export const ImgWrap = styled.div`
  display: flex;
  column-gap: 24px;
`;
export const RadioWrap = styled.div`
  display: flex;
`;
export const RadioLabel = styled.div`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
`;
export const RadioBtn = styled.input`
  display: inline-block;
`;

export const SubmitBtn = styled.button`
  width: 179px;
  height: 52px;
  margin-top: 40px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#FFD600" : "#BDBDBD"};
  font-weight: 500;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
