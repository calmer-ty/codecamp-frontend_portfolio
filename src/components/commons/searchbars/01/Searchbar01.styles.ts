import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.article`
  position: relative;
  width: 100%;
  height: 52px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 45px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
`;
export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;
export const SearchBtn = styled.button`
  width: 94px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
`;
