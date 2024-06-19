import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import { mediaQueries } from "../../../../commons/styles/globalStyles";
import { css } from "@emotion/react";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const ProductWrite = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px;
  border: 2px solid #bdbdbd;
  box-shadow: 5px 5px 5px #bdbdbd;
  background-color: #fff;

  ${mediaQueries.desktop(css`
    padding: 100px 50px;
  `)}
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
  border: 1px solid #aaa;
`;

export const AreaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: 100%;
`;
export const LatLngWrap = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const LatLng = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 1px solid #aaa;
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
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
  border: 1px solid #aaa;
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
  width: 180px;
  height: 52px;
  margin-top: 40px;
  font-weight: 500;
`;

export const Contents = styled(ReactQuill)`
  height: 300px;
  margin-bottom: 44px;
  .ql-toolbar.ql-snow {
    border: 1px solid #aaa;
  }
  .ql-container.ql-snow {
    border: 1px solid #aaa;
  }
`;
