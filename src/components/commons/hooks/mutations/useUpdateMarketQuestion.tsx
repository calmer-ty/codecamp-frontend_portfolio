import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemQuestionArgs } from "../../../../commons/types/generated/types";

const UPDATE_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

export const useUpdateMarketQuestion = () => {
  const result = useMutation<Pick<IMutation, "updateUseditemQuestion">, IMutationUpdateUseditemQuestionArgs>(
    UPDATE_QUESTION
  );

  return result;
};
