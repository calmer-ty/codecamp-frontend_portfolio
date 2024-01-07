import styled from "@emotion/styled";
// Library
import ReactPlayer from "react-player";
import { Modal, Tooltip } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

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

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

// Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export const Avatar = styled.img`
  display: block;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const OptBtn = styled.img`
  width: 32px;
  height: 32px;
`;

// Body
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  margin: 80px 0 40px 0;
  font-size: 36px;
  font-weight: 700;
`;
export const Contents = styled.div`
  /* height: 96px; */
  margin-top: 40px;
  margin-bottom: 120px;
`;

export const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  margin-top: 160px;
`;
export const LikeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 51px;
`;
export const LikeScore = styled.div``;

export const MoveBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 101px 0 87px 0;
  column-gap: 24px;
`;
export const MoveBtn = styled.button`
  width: 179px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled(ReactPlayer)``;
export const WarningModal = styled(Modal)``;
export const AddressInfo = styled(Tooltip)``;
export const LikeIcon = styled(LikeOutlined)``;
export const DislikeIcon = styled(DislikeOutlined)``;
