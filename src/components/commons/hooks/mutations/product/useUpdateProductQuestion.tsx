import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationUpdateUseditemQuestionArgs } from "../../../../../commons/types/generated/types";

const UPDATE_PRODUCT_QUESTION = gql`
  mutation updateUseditemQuestion($updateUseditemQuestionInput: UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
    updateUseditemQuestion(updateUseditemQuestionInput: $updateUseditemQuestionInput, useditemQuestionId: $useditemQuestionId) {
      _id
    }
  }
`;

export const useUpdateProductQuestion = (): MutationReturnType<"updateUseditemQuestion", IMutationUpdateUseditemQuestionArgs> => {
  return useMutation<Pick<IMutation, "updateUseditemQuestion">, IMutationUpdateUseditemQuestionArgs>(UPDATE_PRODUCT_QUESTION);
};
