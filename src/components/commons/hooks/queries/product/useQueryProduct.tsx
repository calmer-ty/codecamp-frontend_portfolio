import { gql, useQuery } from "@apollo/client";
import useIdCheck from "../../customs/useIdCheck";

import type { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../../commons/types/generated/types";
import type { QueryReturnType } from "../../hooks.types";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      useditem
      user
      createdAt
    }
  }
`;

export const useFetchProductQuestions = (): QueryReturnType<"fetchUseditemQuestions", IQueryFetchUseditemQuestionsArgs> => {
  const { id } = useIdCheck("useditemId");
  return useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: id },
  });
};
