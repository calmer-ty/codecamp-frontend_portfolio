import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface IPageProps {
  isActive: boolean;
}
export interface IPageBtnProps {
  onDisable: boolean;
}

export interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export interface IPaginationUIProps {
  startPage: number;
  activedPage: number;
  lastPage: number;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
}
