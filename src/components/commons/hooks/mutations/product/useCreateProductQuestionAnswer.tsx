import { gql, useMutation } from "@apollo/client";
import type { MutationReturnType } from "../../hooks.types";

import type { IMutation, IMutationCreateUseditemQuestionAnswerArgs } from "../../../../../commons/types/generated/types";

const CREATE_PRODUCT_QUESTION = gql`
  mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!, $useditemQuestionId: ID!) {
    createUseditemQuestionAnswer(createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput, useditemQuestionId: $useditemQuestionId) {
      _id
    }
  }
`;

export const useCreateProductQuestionAnswer = (): MutationReturnType<"createUseditemQuestionAnswer", IMutationCreateUseditemQuestionAnswerArgs> => {
  return useMutation<Pick<IMutation, "createUseditemQuestionAnswer">, IMutationCreateUseditemQuestionAnswerArgs>(CREATE_PRODUCT_QUESTION);
};
