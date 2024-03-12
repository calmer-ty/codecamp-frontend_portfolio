import { useFetchProductQuestions } from "../../queries/product/useFetchProductQuestions";

export const useScrollQuestion = () => {
  const { data, fetchMore } = useFetchProductQuestions();
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

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
