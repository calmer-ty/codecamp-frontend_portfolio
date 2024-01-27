import type { ChangeEvent } from "react";
import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./Searchbar01.styles";
import _ from "lodash";

interface ISearchBar01 {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onChangeKeyword: (value: string) => void;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export default function Searchbar01(props: ISearchBar01): JSX.Element {
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  return (
    <S.Wrapper>
      <S.SearchInputWrap>
        <S.SearchIcon />
        <S.SearchInput
          type="text"
          placeholder="제목을 입력해주세요."
          onChange={onChangeSearch}
        />
      </S.SearchInputWrap>
      <S.SearchBtn>검색</S.SearchBtn>
    </S.Wrapper>
  );
}
