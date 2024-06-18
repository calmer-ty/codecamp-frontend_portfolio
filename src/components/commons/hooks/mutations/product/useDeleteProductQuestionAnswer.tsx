import { gql, useMutation } from "@apollo/client";
import type { MutationReturnType } from "../../hooks.types";

import type { IMutation, IMutationDeleteUseditemQuestionAnswerArgs } from "../../../../../commons/types/generated/types";

const DELETE_PRODUCT_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
  }
`;

export const useDeleteProductQuestionAnswer = (): MutationReturnType<"deleteUseditemQuestionAnswer", IMutationDeleteUseditemQuestionAnswerArgs> => {
  return useMutation<Pick<IMutation, "deleteUseditemQuestionAnswer">, IMutationDeleteUseditemQuestionAnswerArgs>(DELETE_PRODUCT_QUESTION_ANSWER);
};
