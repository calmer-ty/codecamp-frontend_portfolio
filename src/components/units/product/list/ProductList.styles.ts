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
  background-color: #ccc;
`;
// View Item
export const ViewItem = styled.div`
  width: 156px;
  height: 200px;
  background-color: #aaa;
`;
export const Picked = styled.div``;
export const ItemImg = styled.img`
  width: 60px;
  height: 60px;
`;
export const ItemName = styled.p`
  font-size: 12px;
`;
