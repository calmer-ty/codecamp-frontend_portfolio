import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useLogoutUser = () => {
  const result = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  return result;
};
