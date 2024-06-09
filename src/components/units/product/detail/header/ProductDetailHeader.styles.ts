import styled from "@emotion/styled";
import { Modal, Tooltip } from "antd";

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Seller = styled.span`
  font-weight: bold;
`;
export const CreatedAt = styled.span`
  font-size: 14px;
  color: #828282;
`;
export const LinkBtn = styled.img`
  width: 32px;
  height: 32px;
`;

export const WarningModal = styled(Modal)``;
export const AddressInfo = styled(Tooltip)`
  cursor: pointer;
`;
