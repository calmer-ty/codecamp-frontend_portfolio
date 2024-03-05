import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";

const UPDATE_PRODUCT = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useUpdateProduct = () => {
  const result = useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_PRODUCT);
  return result;
};
