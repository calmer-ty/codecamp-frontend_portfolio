import { gql, useQuery } from "@apollo/client";

import type { IQuery, IQueryFetchBoardArgs } from "../../../../../commons/types/generated/types";
import type { QueryReturnType } from "../../hooks.types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const useFetchBoard = (variables: IQueryFetchBoardArgs): QueryReturnType<"fetchBoard", IQueryFetchBoardArgs> => {
  return useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, { variables });
};
