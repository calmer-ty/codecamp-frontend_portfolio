import styled from "@emotion/styled";

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
`;
export const ListWrap = styled.main`
  display: flex;
  justify-content: space-between;
`;
export const List = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 282px;
  height: 390px;
  padding: 20px;
  box-shadow: 2px 2px 3px #cdcdcd;
`;

export const ItemImg = styled.img`
  width: 242px;
  height: 242px;
  margin-bottom: 20px;
  object-fit: contain;
`;
export const ItemTitle = styled.a`
  width: 100%;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  /* ...  */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ItemRemark = styled.span`
  width: 100%;
  margin-bottom: 8px;
`;
export const ItemPrice = styled.span`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
