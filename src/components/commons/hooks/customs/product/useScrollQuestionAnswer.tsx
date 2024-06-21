import { useFetchProductQuestionAnswers } from "../../queries/product/useFetchProductQuestionAnswers";

import type { IQuery } from "../../../../../commons/types/generated/types";

export const useScrollQuestionAnswer = (
  id: string
): {
  data: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  onLoadMore: () => void;
} => {
  const { data, fetchMore } = useFetchProductQuestionAnswers(id);
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestionAnswers === undefined) return { fetchUseditemQuestionAnswers: [...prev.fetchUseditemQuestionAnswers] };

        return {
          fetchUseditemQuestionAnswers: [...prev.fetchUseditemQuestionAnswers, ...fetchMoreResult.fetchUseditemQuestionAnswers],
        };
      },
    });
  };
  return {
    data,
    onLoadMore,
  };
};
