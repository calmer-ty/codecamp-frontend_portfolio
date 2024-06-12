import { gql, useQuery } from "@apollo/client";
import useIdCheck from "../customs/useIdCheck";

import type { IQuery, IQueryFetchUseditemArgs, IQueryFetchUseditemQuestionsArgs, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import type { OperationVariables, QueryResult } from "@apollo/client";
import type { QueryReturnType } from "../hooks.types";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      pickedCount
      images
      tags
      seller {
        name
      }
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;
export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      createdAt
      images
      tags
      pickedCount
      seller {
        name
      }
    }
  }
`;
export const FETCH_USEDITEMS_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      images
      remarks
      price
      pickedCount
    }
  }
`;
export const FETCH_USEDITEM_QUESTION = gql`
  query fetchUseditemQuestion($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      useditem
      user
      createdAt
    }
  }
`;

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

export const useFetchProduct = (variables: IQueryFetchUseditemArgs): QueryReturnType<"fetchUseditem", IQueryFetchUseditemArgs> => {
  return useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables,
  });
};
export const useFetchProducts = (): QueryReturnType<"fetchUseditems", IQueryFetchUseditemsArgs> => {
  return useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS);
};

export const useFetchProductsBest = (): QueryReturnType<"fetchUseditemsOfTheBest", OperationVariables> => {
  return useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USEDITEMS_BEST);
};

export const fetchProductQuestion = (): QueryReturnType<"fetchUseditemQuestions", IQueryFetchUseditemQuestionsArgs> => {
  const { id } = useIdCheck("useditemId");
  return useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: id },
  });
};
export const useFetchProductQuestions = (): QueryResult<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs> => {
  const { id } = useIdCheck("useditemId");
  return useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: id },
  });
};
