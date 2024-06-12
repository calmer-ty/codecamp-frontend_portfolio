import { gql, useMutation } from "@apollo/client";

import type { IMutation, IMutationLoginUserExampleArgs } from "../../../../../commons/types/generated/types";
import type { MutationReturnType } from "../../hooks.types";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useLoginUserExample = (): MutationReturnType<"loginUserExample", IMutationLoginUserExampleArgs> => {
  return useMutation<Pick<IMutation, "loginUserExample">, IMutationLoginUserExampleArgs>(LOGIN_USER_EXAMPLE);
};
