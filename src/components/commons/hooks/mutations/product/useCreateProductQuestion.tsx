import { gql, useMutation } from "@apollo/client";
import type { MutationReturnType } from "../../hooks.types";

import type { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../../commons/types/generated/types";

const CREATE_PRODUCT_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useCreateProductQuestion = (): MutationReturnType<"createUseditemQuestion", IMutationCreateUseditemQuestionArgs> => {
  return useMutation<Pick<IMutation, "createUseditemQuestion">, IMutationCreateUseditemQuestionArgs>(CREATE_PRODUCT_QUESTION);
};
