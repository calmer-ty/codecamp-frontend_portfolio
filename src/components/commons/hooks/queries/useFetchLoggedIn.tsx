import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;
export const useFetchLoggedIn = (): any => {
  return useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
};
