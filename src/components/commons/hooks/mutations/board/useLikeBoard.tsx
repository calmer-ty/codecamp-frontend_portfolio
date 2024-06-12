import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationLikeBoardArgs } from "../../../../../commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const useLikeBoard = (): any => {
  return useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);
};
