import styled from "@emotion/styled";

export const ContentsWrap = styled.article`
  position: relative;
  border: 1px solid #bdbdbd;
  background-color: #fff;
`;
export const Contents = styled.textarea`
  width: 100%;
  height: 110px;
  padding: 20px;
  border: 0;
`;
export const ContentsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-top: 1px solid #bdbdbd;
`;
export const ContentsLength = styled.span`
  margin: 0 20px;
  color: #bdbdbd;
`;
export const BtnWrap = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;
export const SubmitBtn = styled.button`
  width: 90px;
  height: 50px;
  background-color: #000;
  color: #fff;
`;
export const CancelBtn = styled.button`
  width: 90px;
  height: 50px;
  background-color: #f00;
  color: #fff;
`;
