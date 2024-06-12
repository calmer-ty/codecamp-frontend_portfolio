import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationToggleUseditemPickArgs } from "../../../../../commons/types/generated/types";

const TOGGLE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useToggleProductPick = (): any => {
  return useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_PICK);
};
