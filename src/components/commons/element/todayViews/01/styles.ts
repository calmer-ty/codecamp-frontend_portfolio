import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mediaQueries } from "../../../../../commons/styles/globalStyles";

export const TodayView = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  border: 1px solid #333;
  background-color: #fff;

  ${mediaQueries.desktop(css`
    border: none;
    background-color: initial;
  `)}
`;
export const Title = styled.h3`
  width: 100%;
  padding: 2px 8px;
  background-color: #333;
  font-size: 18px;
  text-align: center;
  color: #fff;

  ${mediaQueries.desktop(css`
    display: none;
  `)}
`;

// View Item
export const ViewItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 100px;
  margin: 10px 0;
`;
export const ViewItem = styled.a`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  padding: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  ${mediaQueries.desktop(css`
    padding: 0;
    &::before {
      border-radius: 50%;
    }
  `)}
`;
export const MainImg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  object-fit: cover;

  ${mediaQueries.desktop(css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `)}
`;
export const ItemName = styled.span`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${mediaQueries.desktop(css`
    display: none;
  `)}
`;
