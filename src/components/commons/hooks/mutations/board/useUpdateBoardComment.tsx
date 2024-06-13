import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationUpdateBoardCommentArgs } from "../../../../../commons/types/generated/types";

const UPDATE_COMMENT = gql`
  mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!) {
    updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, password: $password, boardCommentId: $boardCommentId) {
      _id
    }
  }
`;

export const useUpdateBoardComment = (): MutationReturnType<"updateBoardComment", IMutationUpdateBoardCommentArgs> => {
  return useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_COMMENT);
};
