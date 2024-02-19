import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemArgs } from "../../../../commons/types/generated/types";

const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteMarket = () => {
  const result = useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_USEDITEM);
  return result;
};
