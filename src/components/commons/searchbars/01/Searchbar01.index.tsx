import * as S from "./Searchbar01.styles";
import type { ChangeEvent } from "react";

interface ISearchBar01 {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar01(props: ISearchBar01): JSX.Element {
  return (
    <S.Searchbar>
      <S.SearchIcon />
      <S.SearchInput type="text" placeholder="제목을 입력해주세요." onChange={props.onChangeSearch} />
    </S.Searchbar>
  );
}
