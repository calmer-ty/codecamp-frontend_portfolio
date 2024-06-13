import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateBoardArgs } from "../../../../../commons/types/generated/types";
import type { MutationReturnType } from "../../hooks.types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const useCreateBoard = (): MutationReturnType<"createBoard", IMutationCreateBoardArgs> => {
  return useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
};
