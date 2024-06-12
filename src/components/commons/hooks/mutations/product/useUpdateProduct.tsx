import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationUpdateUseditemArgs } from "../../../../../commons/types/generated/types";

const UPDATE_PRODUCT = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useUpdateProduct = (): MutationReturnType<"updateUseditem", IMutationUpdateUseditemArgs> => {
  return useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_PRODUCT);
};
