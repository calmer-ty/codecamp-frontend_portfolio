import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "../MarketList.types";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 20px;
  width: 100%;
`;
export const Table = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;

export const List = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-top: 1px solid #bdbdbd;
`;

export const ListItem = styled.span`
  width: 100px;
  text-align: center;
  color: #4f4f4f;
`;
export const ListItemTitle = styled.a`
  width: 400px;
  text-align: center;
  color: #4f4f4f;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
export const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 52px;
  font-weight: bold;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
`;

export const KeywordToken = styled.span`
  color: ${(props: IKeywordTokenProps) => (props.isMatched ? "red" : "")};
`;
