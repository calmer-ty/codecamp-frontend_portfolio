import styled from "@emotion/styled";
import { CloseOutlined } from "@ant-design/icons";

export const UploadBtn = styled.button`
  width: 100px;
  height: 100px;
  background-color: lightgray;
  font-weight: bold;
`;
export const UploadInput = styled.input`
  display: none;
`;

export const UploadWrap = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;
export const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
  object-fit: cover;
  cursor: pointer;
`;
export const UploadCloseBtn = styled(CloseOutlined)`
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
`;
