import styled from "@emotion/styled";

export const TodayView = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
  border: 1px solid #bdbdbd;
  background-color: #fefefe;
`;
export const ViewTitle = styled.div`
  font-size: 18px;
`;

// View Item
export const ViewItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 4px;
  width: 140px;
  padding: 30px 25px 15px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  cursor: pointer;
  :hover {
    background-color: rgba(205, 205, 205, 0.5);
  }
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

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ItemRemark = styled.span`
  font-size: 12px;
  color: #4f4f4f;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ItemPrice = styled.span`
  margin-top: 2px;
  font-weight: bold;
`;
