import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

// emotion은 태그로 쓰이기 때문에 대문자로 사용한다
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.article`
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

export const InputWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
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

export const Input = styled.input`
  height: 52px;
  padding: 0 16px;
`;
export const Textarea = styled.textarea`
  height: 320px;
  padding: 16px;
`;

export const AreaWrap = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  row-gap: 20px;
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
  font-weight: 500;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
