import { mediaQueries } from "../../../../commons/styles/globalStyles";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Modal } from "antd";

import DaumPostcodeEmbed from "react-daum-postcode";

// emotion은 태그로 쓰이기 때문에 대문자로 사용한다
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px;
  border: 2px solid #bdbdbd;
  box-shadow: 5px 5px 5px #bdbdbd;
  background-color: #fff;

  ${mediaQueries.desktop(css`
    padding: 50px;
  `)}
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 20px;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const formItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AddressInput = styled.input`
  height: 52px;
  padding: 0 16px;
  border: 1px solid #777;
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
export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 12px;
  border: 1px solid #777;
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ZipcodeWrap = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding: 0 12px;
  text-align: center;
  border: 1px solid #777;
`;

export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
`;
export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 20px;
  padding: 0 12px;
`;

export const ImgWrap = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
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
  font-weight: bold;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
