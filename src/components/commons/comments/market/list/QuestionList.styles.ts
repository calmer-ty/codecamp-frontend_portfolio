import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

// Layout
export const FlexRow = styled.div`
  display: flex;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// List
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const ItemTop = styled.div`
  display: flex;
  margin-bottom: 4px;
`;
export const Writer = styled.div`
  margin-right: 16px;
`;
export const Contents = styled.div`
  margin-top: 6px;
  margin-bottom: 20px;
`;
export const CreateDate = styled.div`
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
export const EditBtn = styled.button`
  width: 18px;
  height: 18px;
  background: url("/images/boardComment/list/ic_edit.png") no-repeat center/contain;
`;
export const DeleteBtn = styled.button`
  width: 18px;
  height: 18px;
  background: url("/images/boardComment/list/ic_exit.png") no-repeat center/contain;
`;

// Library
export const CommentDeleteModal = styled(Modal)``;
export const RateScore = styled(Rate)``;
