import type { ApolloQueryResult } from "@apollo/client";
import type { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface IKeywordTokenProps {
  isMatched: boolean;
}
export interface IProductListHeaderProps {
  dataProductsBest: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
}
export interface IProductListBodyProps {
  dataProductsList: Pick<IQuery, "fetchUseditems"> | undefined;
  onLoadMore: () => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
