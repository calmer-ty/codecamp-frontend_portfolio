import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemArgs } from "../../../../../commons/types/generated/types";

const DELETE_PRODUCT = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteProduct = () => {
  const result = useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_PRODUCT);
  return result;
};
