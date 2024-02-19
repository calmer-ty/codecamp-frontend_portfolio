import styled from "@emotion/styled";
// Library
import { Modal, Tooltip } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

export const GPSWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// Header
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const SellerWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Seller = styled.div`
  font-weight: bold;
`;

export const CreatedAt = styled.div`
  font-size: 14px;
  color: #828282;
`;

export const LinkBtn = styled.img`
  width: 32px;
  height: 32px;
`;

// Body
export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BodyTop = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  padding: 20px 0 40px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;
export const Remark = styled.div`
  font-size: 18px;
  color: #bdbdbd;
`;
export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const Price = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
export const ImgWrap = styled.div``;
export const ImgItem = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
export const PickedCount = styled.div``;
export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
export const Contents = styled.div``;

export const BodyBottom = styled.div`
  padding: 80px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const Map = styled.div`
  height: 360px;
  background-color: #bdbdbd;
`;
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

// export const Youtube = styled(ReactPlayer)``;
export const WarningModal = styled(Modal)``;
export const AddressInfo = styled(Tooltip)`
  cursor: pointer;
`;
// export const LikeIcon = styled(LikeOutlined)``;
// export const DislikeIcon = styled(DislikeOutlined)``;
