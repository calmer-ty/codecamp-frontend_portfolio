import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      createdAt
      images
      pickedCount
      seller {
        name
      }
    }
  }
`;

export const useFetchProducts = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS);
  return result;
};
