import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";

const UPDATE_MARKET = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`;

export const useUpdateMarket = () => {
  const result = useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_MARKET);
  return result;
};
