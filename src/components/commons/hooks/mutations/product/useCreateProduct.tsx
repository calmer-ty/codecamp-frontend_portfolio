import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationCreateUseditemArgs } from "../../../../../commons/types/generated/types";

const CREATE_PRODUCT = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useCreateProduct = (): MutationReturnType<"createUseditem", IMutationCreateUseditemArgs> => {
  return useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_PRODUCT);
};
