import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemArgs } from "../../../../commons/types/generated/types";

const DELETE_MARKET = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteMarket = () => {
  const result = useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_MARKET);
  return result;
};
