import styled from "@emotion/styled";

export const Wrapper = styled.article`
  width: 100%;
  height: 100%;
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
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
