import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteBoardArgs } from "../../../../../commons/types/generated/types";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const useDeleteBoard = (): any => {
  return useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD);
};
