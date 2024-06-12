import { gql, useMutation } from "@apollo/client";
import type { MutationReturnType } from "../../hooks.types";

import type { IMutation, IMutationToggleUseditemPickArgs } from "../../../../../commons/types/generated/types";

const TOGGLE_PRODUCT_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const usePickProduct = (): MutationReturnType<"toggleUseditemPick", IMutationToggleUseditemPickArgs> => {
  return useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_PRODUCT_PICK);
};
