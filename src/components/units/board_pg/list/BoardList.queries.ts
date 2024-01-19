import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetch($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
