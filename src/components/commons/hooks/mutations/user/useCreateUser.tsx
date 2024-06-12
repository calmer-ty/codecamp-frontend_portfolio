import { gql, useMutation } from "@apollo/client";

import type { IMutation, IMutationCreateUserArgs } from "../../../../../commons/types/generated/types";
import type { MutationReturnType } from "../../hooks.types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      name
    }
  }
`;

export const useCreateUser = (): MutationReturnType<"createUser", IMutationCreateUserArgs> => {
  return useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER);
};
