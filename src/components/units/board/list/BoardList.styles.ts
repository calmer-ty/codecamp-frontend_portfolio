import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1200px;
  row-gap: 40px;
`;
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  font-size: 18px;
  font-weight: bold;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  border-top: 1px solid #bdbdbd;
`;

export const ListItem = styled.div`
  text-align: center;
  color: #4f4f4f;
`;
export const ListItemTitle = styled.div`
  text-align: center;
  color: #4f4f4f;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
export const KeywordToken = styled.span`
  color: ${(props: IKeywordTokenProps) => (props.isMatched ? "red" : "")};
`;

export const TableBottom = styled.div`
  height: 19px;
  margin-top: 57px;
  background-color: yellowgreen;
`;
export const MoveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 171px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-color: #fff;
  font-weight: 500;
`;
export const MoveBtnIcon = styled.img`
  margin-right: 8px;
`;
