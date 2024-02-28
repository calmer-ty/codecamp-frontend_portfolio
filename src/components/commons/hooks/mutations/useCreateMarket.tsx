import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";

const CREATE_MARKET = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useCreateMarket = () => {
  const result = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_MARKET);
  return result;
};
