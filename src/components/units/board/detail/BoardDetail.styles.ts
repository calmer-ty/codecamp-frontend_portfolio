import styled from "@emotion/styled";
import { Modal, Tooltip } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 84px 102px;
  border: 1px solid #bdbdbd;
`;

export const WarningModal = styled(Modal)``;
export const AddressInfo = styled(Tooltip)``;
