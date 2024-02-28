import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../commons/types/generated/types";

const CREATE_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useCreateMarketQuestion = () => {
  const result = useMutation<Pick<IMutation, "createUseditemQuestion">, IMutationCreateUseditemQuestionArgs>(
    CREATE_QUESTION
  );

  return result;
};
