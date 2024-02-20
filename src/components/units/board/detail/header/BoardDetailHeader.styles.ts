import styled from "@emotion/styled";
import { Tooltip } from "antd";

// Header
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;
export const FlexRow = styled.section`
  display: flex;
  align-items: center;
`;
export const FlexColumn = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.img`
  display: block;
`;
export const Writer = styled.span``;
export const CreatedAt = styled.span``;
export const OptBtn = styled.img`
  width: 32px;
  height: 32px;
`;
export const AddressInfo = styled(Tooltip)``;
