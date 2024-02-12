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

// fetchUseditemsCountIBought;
export const FETCH_USEDITEMS_COUNT_I_BOUGHT = gql`
  query {
    fetchUseditemsCountIBought
  }
`;
