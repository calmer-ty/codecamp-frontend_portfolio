import { gql, useQuery } from "@apollo/client";

import type { IQuery, IQueryFetchUseditemQuestionAnswersArgs } from "../../../../../commons/types/generated/types";
import type { QueryReturnType } from "../../hooks.types";

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      useditemQuestion {
        _id
      }
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const useFetchProductQuestionAnswers = (useditemQuestionId: string): QueryReturnType<"fetchUseditemQuestionAnswers", IQueryFetchUseditemQuestionAnswersArgs> => {
  return useQuery<Pick<IQuery, "fetchUseditemQuestionAnswers">, IQueryFetchUseditemQuestionAnswersArgs>(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId },
  });
};
