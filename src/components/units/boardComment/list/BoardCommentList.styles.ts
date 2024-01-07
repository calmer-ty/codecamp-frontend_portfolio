import styled from "@emotion/styled";
import { Modal, Rate } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const RowWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ColWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;
export const Avatar = styled.img`
  margin-right: 12px;
`;
export const Writer = styled.div`
  margin-right: 16px;
`;
export const Contents = styled.div``;

export const CreateDate = styled.div`
  margin-top: 20px;
  margin-left: 52px;
`;

// BTN
export const OptBtnWrap = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  column-gap: 10px;
`;
export const EditBtn = styled.button`
  width: 18px;
  height: 18px;
  background: url("/images/ic_edit.png") no-repeat center/contain;
`;
export const DelBtn = styled.button`
  width: 18px;
  height: 18px;
  background: url("/images/ic_exit.png") no-repeat center/contain;
`;

// Library
export const CommentDeleteModal = styled(Modal)``;
export const Like = styled(Rate)``;
