import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsCountArgs } from "../../../../../commons/types/generated/types";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

export const useFetchBoardsCount = (): any => {
  return useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);
};
