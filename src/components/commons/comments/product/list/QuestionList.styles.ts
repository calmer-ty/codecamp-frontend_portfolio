import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

// Layout
export const FlexRow = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: space-between;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);
`;

// List
export const ListItem = styled.article`
  display: flex;
  flex-direction: column;
  width: 1200px;
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const Writer = styled.span`
  margin-bottom: 10px;
`;
export const Contents = styled.p`
  margin-bottom: 20px;
`;
export const CreateDate = styled.span`
  font-size: 12px;
  color: #bdbdbd;
`;

// BTN
export const BtnWrap = styled.div`
  display: flex;
  column-gap: 10px;
  position: absolute;
  top: 20px;
  right: 0;
`;
// Library
export const CommentDeleteModal = styled(Modal)``;
export const RateScore = styled(Rate)``;
