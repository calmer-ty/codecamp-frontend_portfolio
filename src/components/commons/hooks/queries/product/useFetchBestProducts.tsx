import { gql, useQuery } from "@apollo/client";

import type { IQuery } from "../../../../../commons/types/generated/types";
import type { OperationVariables } from "@apollo/client";
import type { QueryReturnType } from "../../hooks.types";

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

export const useFetchProductsBest = (): QueryReturnType<"fetchUseditemsOfTheBest", OperationVariables> => {
  return useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USEDITEMS_BEST);
};
