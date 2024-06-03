import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

export const Body = styled.div`
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

export const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;
export const LikeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 51px;
`;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  column-gap: 24px;
`;
export const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const LikeScore = styled.div``;
export const Youtube = styled(ReactPlayer)`
  margin: 120px 0;
`;
export const LikeIcon = styled(LikeOutlined)``;
export const DislikeIcon = styled(DislikeOutlined)``;
