import { gql, useQuery } from "@apollo/client";

import type { IQuery, IQueryFetchBoardsCountArgs } from "../../../../../commons/types/generated/types";
import type { QueryReturnType } from "../../hooks.types";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export const useFetchBoardsCount = (): QueryReturnType<"fetchBoardsCount", IQueryFetchBoardsCountArgs> => {
  return useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);
};
