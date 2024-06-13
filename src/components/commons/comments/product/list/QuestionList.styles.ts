import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

export const ListItem = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const ItemWrap = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: space-between;
`;
export const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: calc(100% - 50px);
`;

export const Writer = styled.span`
  font-weight: bold;
`;
export const Contents = styled.p``;
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
