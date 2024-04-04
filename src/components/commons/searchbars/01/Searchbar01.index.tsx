import * as S from "./Searchbar01.styles";
import { memo, type ChangeEvent } from "react";

interface ISearchBar01 {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Searchbar01(props: ISearchBar01): JSX.Element {
  console.log("Searchbar01 렌더링 됩니다");
  return (
    <S.Searchbar>
      <S.SearchIcon />
      <S.SearchInput type="text" placeholder="제목을 입력해주세요." onChange={props.onChangeSearch} />
    </S.Searchbar>
  );
}
export default memo(Searchbar01);
