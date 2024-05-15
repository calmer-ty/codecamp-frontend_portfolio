import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "../ProductList.types";
import { TagOutlined } from "@ant-design/icons";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;
export const ListWrap = styled.main`
  overflow-y: scroll;
  max-height: calc(194px * 10);
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  &::-webkit-scrollbar {
    width: 10px;
    background: #efefef;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #cdcdcd;
    cursor: pointer;
  }
`;
export const ListItem = styled.a`
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  background-color: #f9f9f9;
  cursor: pointer;
  :hover {
    background-color: rgba(205, 205, 205, 0.5);
  }
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;
  padding: 28px 0;
  margin-left: 40px;
`;

export const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  color: #4f4f4f;
`;

export const ItemImg = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
`;

export const ItemTitle = styled.span`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: bold;
  color: #4f4f4f;
`;
export const ItemRemark = styled.span`
  margin-bottom: 4px;
  color: #4f4f4f;
`;

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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

export const InfoBottom = styled.div`
  display: flex;
  column-gap: 22px;
`;
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const KeywordToken = styled.span`
  color: ${(props: IKeywordTokenProps) => (props.isMatched ? "red" : "")};
`;
