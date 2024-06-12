import { useIdCheck } from "../../customs/useIdCheck";
import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";

export const FETCH_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const useFetchBoardComments = (): any => {
  const { id } = useIdCheck("boardId");
  return useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_COMMENTS, {
    variables: { boardId: id },
  });
};
