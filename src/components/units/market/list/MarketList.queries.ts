import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      createdAt
    }
  }
`;

export const FETCH_BEST_USEDITEM = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      # name
      # price
    }
  }
`;
