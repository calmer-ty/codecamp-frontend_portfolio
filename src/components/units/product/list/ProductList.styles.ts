import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1200px;
  row-gap: 40px;
`;
export const TodayView = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  position: fixed;
  top: 500px;
  right: 0;
  width: 196px;
  height: 506px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
`;
// View Item
export const ViewItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 156px;
  height: 200px;
  padding: 10px;
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
`;
export const ItemName = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
export const ItemRemark = styled.p`
  font-size: 12px;
  color: #4f4f4f;
`;
export const ItemPrice = styled.p`
  margin-top: 4px;
  font-weight: bold;
`;
