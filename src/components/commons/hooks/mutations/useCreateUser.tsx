import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      name
    }
  }
`;
export const useCreateUser = () => {
  const result = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  return result;
};
