import { gql, useQuery } from "@apollo/client";

import type { IQuery, IQueryFetchUseditemArgs } from "../../../../../commons/types/generated/types";
import type { QueryReturnType } from "../../hooks.types";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      pickedCount
      images
      tags
      seller {
        name
      }
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const useFetchProduct = (variables: IQueryFetchUseditemArgs): QueryReturnType<"fetchUseditem", IQueryFetchUseditemArgs> => {
  return useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables,
  });
};
