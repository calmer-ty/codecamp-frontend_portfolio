import { gql, useQuery } from "@apollo/client";

import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../../commons/types/generated/types";
import type { QueryReturnType } from "../../hooks.types";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      createdAt
      images
      tags
      pickedCount
      seller {
        name
      }
    }
  }
`;

export const useFetchProducts = (): QueryReturnType<"fetchUseditems", IQueryFetchUseditemsArgs> => {
  return useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS);
};
