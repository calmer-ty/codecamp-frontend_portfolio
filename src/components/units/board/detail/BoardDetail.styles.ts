import styled from "@emotion/styled";

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
`;
export const Title = styled.div`
  margin: 80px 0 40px 0;
  font-size: 36px;
  font-weight: 700;
`;
export const Contents = styled.div`
  height: 96px;
  margin-top: 20px;
`;
export const Video = styled.div``;

export const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
export const LikeBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 51px;
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
  cursor: pointer;
`;
