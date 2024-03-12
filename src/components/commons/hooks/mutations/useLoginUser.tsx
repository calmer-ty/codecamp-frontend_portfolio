import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationLoginUserArgs } from "../../../../commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useLoginUser = () => {
  const result = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  return result;
};
