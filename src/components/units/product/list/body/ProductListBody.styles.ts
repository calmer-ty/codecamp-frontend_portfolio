import styled from "@emotion/styled";
import type { IKeywordTokenProps } from "../ProductList.types";
import { TagOutlined } from "@ant-design/icons";
import { mediaQueries } from "../../../../../commons/styles/globalStyles";
import { css } from "@emotion/react";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;
export const ListWrap = styled.div`
  overflow-y: scroll;
  max-height: calc(200px * 10);
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
  column-gap: 30px;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  background-color: #f9f9f9;
  cursor: pointer;

  &:hover {
    background-color: rgba(205, 205, 205, 0.5);
  }

  ${mediaQueries.desktop(css`
    flex-direction: column;
    row-gap: 20px;
  `)}
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 6px;

  ${mediaQueries.desktop(css`
    width: 200px;
  `)}
`;

// export const InfoTop = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: #4f4f4f;
// `;

export const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
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

export const TagIcon = styled(TagOutlined)`
  font-size: 40px;
  color: #ffd600;
`;

export const InfoBottom = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-top: 10px;
`;
export const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 10px;
`;
export const PriceText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const KeywordToken = styled.span`
  color: ${(props: IKeywordTokenProps) => (props.isMatched ? "red" : "")};
`;
