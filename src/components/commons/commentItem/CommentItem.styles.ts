import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

// Layout
export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// List
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;
export const Avatar = styled.img`
  padding: 4px;
  margin-right: 12px;
`;
export const Writer = styled.div`
  margin-right: 16px;
`;
export const Contents = styled.div``;

export const CreateDate = styled.div`
  margin: 20px 0 0 60px;
  font-size: 12px;
  color: #bdbdbd;
`;

// BTN
export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 0;
  column-gap: 10px;
`;
export const EditButton = styled.button`
  width: 18px;
  height: 18px;
  background: url("/images/boardComment/list/ic_edit.png") no-repeat
    center/contain;
`;
export const DeleteButton = styled.button`
  width: 18px;
  height: 18px;
  background: url("/images/boardComment/list/ic_exit.png") no-repeat
    center/contain;
`;

// Library
export const CommentDeleteModal = styled(Modal)``;
export const RateScore = styled(Rate)``;
