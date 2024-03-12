import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../../commons/types/generated/types";

export const FETCH_BOARDS = gql`
  query fetch($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const useFetchBoards = () => {
  const result = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  return result;
};
