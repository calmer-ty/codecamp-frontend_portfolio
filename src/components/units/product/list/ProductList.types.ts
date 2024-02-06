import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface ProductListUIProps {
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;

  data?: Pick<IQuery, "fetchBoards"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;

  // 검색
  keyword: string;
  onChangeKeyword: (value: string) => void;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export interface IKeywordTokenProps {
  isMatched: boolean;
}
