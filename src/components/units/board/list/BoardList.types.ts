import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface BoardListUIProps {
  onClickMoveToPage: (path: string) => () => void;

  data?: Pick<IQuery, "fetchBoards"> | undefined;
  // refetch: (
  //   variables?: Partial<any> | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  // count?: number;

  // 검색
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  refetchCount: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;

  paginationArgs: any;
}

export interface IKeywordTokenProps {
  isMatched: boolean;
}
