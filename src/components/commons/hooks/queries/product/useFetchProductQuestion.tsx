import { useIdCheck } from "../../customs/useIdCheck";
import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../../commons/types/generated/types";

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

export const fetchProductQuestion = (): any => {
  const { id } = useIdCheck("useditemId");
  return useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: id },
  });
};
