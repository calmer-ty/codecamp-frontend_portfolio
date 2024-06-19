import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 100px;
  border: 2px solid #bdbdbd;
  box-shadow: 5px 5px 5px #bdbdbd;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
`;
export const FlexColumn = styled.div`
  display: flex;
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 60px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  padding: 0 16px;
  border: 1px solid #bdbdbd;
`;

export const LatLng = styled.input`
  height: 52px;
  padding: 0 16px;
  border: 1px solid #bdbdbd;
`;
export const AreaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  row-gap: 20px;
`;
export const SearchBtn = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
`;
export const Address = styled.input`
  height: 52px;
  padding: 0 12px;
`;

export const ImgWrap = styled.div`
  display: flex;
  column-gap: 24px;
`;
export const RadioLabel = styled.div`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
`;
export const RadioBtn = styled.input`
  display: inline-block;
`;

export const SubmitBtn = styled.button`
  width: 179px;
  height: 52px;
  margin-top: 40px;
  font-weight: 500;
`;

export const Contents = styled(ReactQuill)`
  height: 300px;
  margin-bottom: 44px;
`;
