import { useFetchProducts } from "../../queries/product/useFetchProducts";

export const useScrollProductsList = () => {
  const { data, fetchMore, refetch } = useFetchProducts();
  // 댓글 무한 스크롤
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // console.log(prev.fetchUseditems);
        // console.log(fetchMoreResult.fetchUseditems);
        if (fetchMoreResult?.fetchUseditems === undefined) return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
        };
      },
    });
  };
  return {
    data,
    onLoadMore,
    refetch,
  };
};
