import { useFetchProductQuestions } from "../../queries/product/useQueryProduct";

import type { IQuery } from "../../../../../commons/types/generated/types";

export const useScrollQuestion = (): {
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  onLoadMore: () => void;
} => {
  const { data, fetchMore } = useFetchProductQuestions();
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined) return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [...prev.fetchUseditemQuestions, ...fetchMoreResult.fetchUseditemQuestions],
        };
      },
    });
  };
  return {
    data,
    onLoadMore,
  };
};
