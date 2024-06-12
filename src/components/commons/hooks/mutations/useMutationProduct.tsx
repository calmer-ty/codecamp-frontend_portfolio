import { gql, useMutation } from "@apollo/client";
import type { MutationReturnType } from "../hooks.types";

import type {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationDeleteUseditemArgs,
  IMutationDeleteUseditemQuestionArgs,
  IMutationToggleUseditemPickArgs,
  IMutationUpdateUseditemArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

const CREATE_PRODUCT = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;
const UPDATE_PRODUCT = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
const CREATE_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId) {
      _id
    }
  }
`;
const UPDATE_QUESTION = gql`
  mutation updateUseditemQuestion($updateUseditemQuestionInput: UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
    updateUseditemQuestion(updateUseditemQuestionInput: $updateUseditemQuestionInput, useditemQuestionId: $useditemQuestionId) {
      _id
    }
  }
`;
const DELETE_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
const TOGGLE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useCreateProduct = (): MutationReturnType<"createUseditem", IMutationCreateUseditemArgs> => {
  return useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_PRODUCT);
};
export const useUpdateProduct = (): MutationReturnType<"updateUseditem", IMutationUpdateUseditemArgs> => {
  return useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_PRODUCT);
};
export const useDeleteProduct = (): MutationReturnType<"deleteUseditem", IMutationDeleteUseditemArgs> => {
  return useMutation<Pick<IMutation, "deleteUseditem">, IMutationDeleteUseditemArgs>(DELETE_PRODUCT);
};
export const useCreateProductQuestion = (): MutationReturnType<"createUseditemQuestion", IMutationCreateUseditemQuestionArgs> => {
  return useMutation<Pick<IMutation, "createUseditemQuestion">, IMutationCreateUseditemQuestionArgs>(CREATE_QUESTION);
};
export const useUpdateProductQuestion = (): MutationReturnType<"updateUseditemQuestion", IMutationUpdateUseditemQuestionArgs> => {
  return useMutation<Pick<IMutation, "updateUseditemQuestion">, IMutationUpdateUseditemQuestionArgs>(UPDATE_QUESTION);
};
export const useDeleteProductQuestion = (): MutationReturnType<"deleteUseditemQuestion", IMutationDeleteUseditemQuestionArgs> => {
  return useMutation<Pick<IMutation, "deleteUseditemQuestion">, IMutationDeleteUseditemQuestionArgs>(DELETE_QUESTION);
};
export const useToggleProductPick = (): MutationReturnType<"toggleUseditemPick", IMutationToggleUseditemPickArgs> => {
  return useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_PICK);
};
