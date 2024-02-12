import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface MarketListUIProps {
  onClickMoveToPage: (path: string) => () => void;

  data: Pick<IQuery, "fetchUseditems"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  count?: number;

  // 검색
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeKeyword: (value: string) => void;
  // refetchBoardsCount: (
  //   variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export interface IKeywordTokenProps {
  isMatched: boolean;
}
