import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "./ProductWrite.types";
// Library
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

// emotion은 태그로 쓰이기 때문에 대문자로 사용한다
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 100px;
  border: 2px solid #bdbdbd;
  box-shadow: 5px 5px 5px #bdbdbd;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  margin-bottom: 60px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const Error = styled.div`
  height: 20px;
  padding: 0 10px;
  margin: 5px 0;
  font-size: 16px;
  color: red;
`;
export const ProductInput = styled.input`
  height: 52px;
  padding: 0 12px;
`;

export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
`;
export const Address = styled.input`
  height: 52px;
  margin-bottom: 16px;
  padding: 0 12px;
`;

export const ImgWrap = styled.div`
  display: flex;
  column-gap: 24px;
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
