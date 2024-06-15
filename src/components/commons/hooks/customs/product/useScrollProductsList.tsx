import { useFetchProducts } from "../../queries/product/useFetchProducts";

import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export const useScrollProductsList = (): {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  onLoadMore: () => void;
  refetch: (variables?: Partial<IQueryFetchUseditemsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
} => {
  const { data, fetchMore, refetch } = useFetchProducts();
  // 댓글 무한 스크롤
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
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
