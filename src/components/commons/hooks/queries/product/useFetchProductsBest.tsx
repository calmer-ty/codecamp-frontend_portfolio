import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_USEDITEMS_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      images
      remarks
      price
      pickedCount
    }
  }
`;

export const useFetchProductsBest = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USEDITEMS_BEST);
  return result;
};
