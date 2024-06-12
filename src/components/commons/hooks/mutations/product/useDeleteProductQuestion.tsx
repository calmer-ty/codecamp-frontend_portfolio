import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemQuestionArgs } from "../../../../../commons/types/generated/types";

const DELETE_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useDeleteProductQuestion = (): any => {
  return useMutation<Pick<IMutation, "deleteUseditemQuestion">, IMutationDeleteUseditemQuestionArgs>(DELETE_QUESTION);
};
