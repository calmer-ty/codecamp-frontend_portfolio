import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationUpdateUseditemQuestionAnswerArgs } from "../../../../../commons/types/generated/types";

const UPDATE_PRODUCT_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer($updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!, $useditemQuestionAnswerId: ID!) {
    updateUseditemQuestionAnswer(updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput, useditemQuestionAnswerId: $useditemQuestionAnswerId) {
      _id
    }
  }
`;

export const useUpdateProductQuestionAnswer = (): MutationReturnType<"updateUseditemQuestionAnswer", IMutationUpdateUseditemQuestionAnswerArgs> => {
  return useMutation<Pick<IMutation, "updateUseditemQuestionAnswer">, IMutationUpdateUseditemQuestionAnswerArgs>(UPDATE_PRODUCT_QUESTION_ANSWER);
};
