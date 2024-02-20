import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  width: 100%;
  margin: 80px 0 40px 0;
  font-size: 36px;
  font-weight: 700;
`;
export const ImgItem = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
export const Contents = styled.p`
  margin-top: 40px;
`;

export const LikeWrap = styled.section`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;
export const LikeItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 51px;
`;

export const LikeScore = styled.div``;
export const Youtube = styled(ReactPlayer)`
  margin: 120px 0;
`;
export const LikeIcon = styled(LikeOutlined)``;
export const DislikeIcon = styled(DislikeOutlined)``;
