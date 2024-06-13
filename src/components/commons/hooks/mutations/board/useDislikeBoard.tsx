import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationDislikeBoardArgs } from "../../../../../commons/types/generated/types";

const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const useDislikeBoard = (): MutationReturnType<"dislikeBoard", IMutationDislikeBoardArgs> => {
  return useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD);
};
