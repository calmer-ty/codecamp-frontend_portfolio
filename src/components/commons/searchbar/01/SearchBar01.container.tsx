import type { ChangeEvent } from "react";
import * as S from "./SearchBar01.styles";

interface ISearchBar01 {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar01(props: ISearchBar01): JSX.Element {
  return (
    <S.Wrapper>
      <S.SearchInputWrap>
        <S.SearchIcon />
        <S.SearchInput
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={props.onChangeSearch}
        />
      </S.SearchInputWrap>
      <S.SearchBtn>검색</S.SearchBtn>
    </S.Wrapper>
  );
}
