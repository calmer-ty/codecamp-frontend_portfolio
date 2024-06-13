import { gql, useMutation } from "@apollo/client";

import type { MutationReturnType } from "../../hooks.types";
import type { IMutation, IMutationCreateBoardCommentArgs } from "../../../../../commons/types/generated/types";

const CREATE_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
    }
  }
`;

export const useCreateBoardComment = (): MutationReturnType<"createBoardComment", IMutationCreateBoardCommentArgs> => {
  return useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_COMMENT);
};
