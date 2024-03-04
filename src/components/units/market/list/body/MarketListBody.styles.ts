import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "../MarketList.types";
import { TagOutlined } from "@ant-design/icons";

export const Body = styled.main`
  width: 100%;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const List = styled.article`
  /* height: 52px; */
  display: flex;
  /* justify-content: space-between; */
  /* padding: 20px 0; */
  border-bottom: 1px solid #bdbdbd;
`;
export const ListItem = styled.div`
  /* text-align: center; */
  width: 400px;
  display: flex;
  flex-direction: column;
  color: #4f4f4f;
`;
export const ListPrice = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const TagIcon = styled(TagOutlined)`
  font-size: 40px;
  color: #ffd600;
`;
export const PriceText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
export const ListItemTitle = styled.a`
  font-size: 24px;
  color: #4f4f4f;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
export const ListRemark = styled.a`
  color: #4f4f4f;
`;

export const KeywordToken = styled.span`
  color: ${(props: IKeywordTokenProps) => (props.isMatched ? "red" : "")};
`;
