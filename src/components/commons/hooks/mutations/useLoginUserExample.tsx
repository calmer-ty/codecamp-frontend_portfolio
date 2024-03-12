import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationLoginUserExampleArgs } from "../../../../commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useLoginUserExample = () => {
  const result = useMutation<Pick<IMutation, "loginUserExample">, IMutationLoginUserExampleArgs>(LOGIN_USER);

  return result;
};
