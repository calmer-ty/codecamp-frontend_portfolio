import styled from "@emotion/styled";

export const Wrapper = styled.div`
  overflow: hidden;
  padding: 0 120px;
`;
export const Container = styled.div`
  padding: 50px;
  border-radius: 20px;
  border: 8px solid #284b63;
  background-color: #ffffff;
`;
export const PageMainImg = styled.img`
  width: 40%;
  height: 350px;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const PageInfoWrap = styled.div`
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const SliderItem = styled.div``;
export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;
export const Desc = styled.div`
  font-size: 20px;
`;
export const SliderItemInner = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
