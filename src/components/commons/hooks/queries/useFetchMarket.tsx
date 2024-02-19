import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";

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
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const useFetchMarket = (variables: IQueryFetchUseditemArgs) => {
  const result = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables,
  });
  return result;
};
