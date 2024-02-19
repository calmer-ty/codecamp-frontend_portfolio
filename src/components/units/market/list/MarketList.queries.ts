import { gql } from "@apollo/client";

export const FETCH_BEST_USEDITEM = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      # name
      # price
    }
  }
`;
