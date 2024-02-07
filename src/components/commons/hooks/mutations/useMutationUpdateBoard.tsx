import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
    }
  }
`;

export const useMutationUpdateBoard = () => {
  const result = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return result;
};
