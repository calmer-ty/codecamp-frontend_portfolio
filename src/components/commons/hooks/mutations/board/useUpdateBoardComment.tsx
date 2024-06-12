import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateBoardCommentArgs } from "../../../../../commons/types/generated/types";

const UPDATE_COMMENT = gql`
  mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!) {
    updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, password: $password, boardCommentId: $boardCommentId) {
      _id
    }
  }
`;

export const useUpdateBoardComment = (): any => {
  return useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_COMMENT);
};
