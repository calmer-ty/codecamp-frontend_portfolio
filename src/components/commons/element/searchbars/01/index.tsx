import * as S from "./styles";
import type { ISearchBarInput } from "./types";

export default function Searchbar01(props: ISearchBarInput): JSX.Element {
  return (
    <S.Searchbar>
      <S.SearchIcon />
      <S.SearchInput type="text" placeholder="제목을 입력해주세요." onChange={props.onChangeSearch} />
    </S.Searchbar>
  );
}
