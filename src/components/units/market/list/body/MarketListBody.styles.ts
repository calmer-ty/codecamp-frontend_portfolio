import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "../MarketList.types";

export const Body = styled.main`
  width: 100%;
`;
export const Table = styled.table`
  width: 100%;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  border-collapse: collapse;
`;
export const List = styled.tr`
  height: 52px;
  border-bottom: 1px solid #bdbdbd;
`;
export const ListItem = styled.td`
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

export const KeywordToken = styled.span`
  color: ${(props: IKeywordTokenProps) => (props.isMatched ? "red" : "")};
`;
