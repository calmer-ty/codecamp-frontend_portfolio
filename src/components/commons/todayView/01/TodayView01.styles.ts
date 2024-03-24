import styled from "@emotion/styled";

export const TodayView = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  position: fixed;
  top: 460px;
  right: 0;
  padding: 20px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
`;
export const ViewTitle = styled.div`
  font-size: 18px;
`;
// View Item
export const ViewItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4px;
  padding: 25px 25px 10px;
  border: 1px solid #bdbdbd;
`;
export const Picked = styled.div`
  display: flex;
  column-gap: 4px;
  position: absolute;
  top: 6px;
  right: 6px;
`;
export const ItemImg = styled.img`
  align-self: center;
  width: 60px;
  height: 60px;
  margin: 12px;
  object-fit: contain;
`;
export const ItemName = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
export const ItemRemark = styled.span`
  font-size: 12px;
  color: #4f4f4f;
`;
export const ItemPrice = styled.span`
  margin-top: 2px;
  font-weight: bold;
`;
