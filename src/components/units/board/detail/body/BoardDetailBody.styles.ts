import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

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
export const ImgWrap = styled.div``;
export const ImgItem = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
export const Contents = styled.div`
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
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 101px 0 87px 0;
  column-gap: 24px;
`;
export const MoveBtn = styled.a`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;
export const LikeScore = styled.div``;
export const Youtube = styled(ReactPlayer)``;
export const LikeIcon = styled(LikeOutlined)``;
export const DislikeIcon = styled(DislikeOutlined)``;
