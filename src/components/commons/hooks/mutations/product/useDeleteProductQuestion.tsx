import { gql, useMutation } from "@apollo/client";
import type { MutationReturnType } from "../../hooks.types";

import type { IMutation, IMutationDeleteUseditemQuestionArgs } from "../../../../../commons/types/generated/types";

const DELETE_PRODUCT_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useDeleteProductQuestion = (): MutationReturnType<"deleteUseditemQuestion", IMutationDeleteUseditemQuestionArgs> => {
  return useMutation<Pick<IMutation, "deleteUseditemQuestion">, IMutationDeleteUseditemQuestionArgs>(DELETE_PRODUCT_QUESTION);
};
