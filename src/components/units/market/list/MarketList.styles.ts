import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "./MarketList.types";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
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
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  /* justify-content: space-between;
  align-items: center;
  height: 52px;
  font-size: 18px;
  font-weight: 700;
  text-align: center; */
`;
export const HeaderItem = styled.div`
  width: 282px;
  height: 390px;
  background-color: #cdcdcd;
`;
export const HeaderItemTitle = styled.div`
  width: 400px;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-top: 1px solid #bdbdbd;
`;

export const ListItem = styled.div`
  width: 100px;
  text-align: center;
  color: #4f4f4f;
`;
export const ListItemTitle = styled.div`
  width: 400px;
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
