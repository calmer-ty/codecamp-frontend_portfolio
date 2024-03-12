import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteUseditemQuestionArgs } from "../../../../../commons/types/generated/types";

const DELETE_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const useDeleteProductQuestion = () => {
  const result = useMutation<Pick<IMutation, "deleteUseditemQuestion">, IMutationDeleteUseditemQuestionArgs>(
    DELETE_QUESTION
  );

  return result;
};
