import { gql, useMutation } from "@apollo/client";

import type { ApolloCache, DefaultContext, MutationTuple, OperationVariables } from "@apollo/client";
import type { IMutation } from "../../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useLogoutUser = (): MutationTuple<Pick<IMutation, "logoutUser">, OperationVariables, DefaultContext, ApolloCache<any>> => {
  return useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
};
