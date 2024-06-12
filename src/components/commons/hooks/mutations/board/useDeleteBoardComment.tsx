import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDeleteBoardCommentArgs } from "../../../../../commons/types/generated/types";

const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const useDeleteBoardComment = (): any => {
  return useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_COMMENT);
};
