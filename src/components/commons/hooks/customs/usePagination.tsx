import { useState } from "react";
import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface IUsePaginationArgs {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  count: number | undefined;
}

export const usePagination = (args: IUsePaginationArgs) => {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((args.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void args.refetch({ page: activedPage });
  };

  const onClickPrevPage = (): void => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    void args.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setActivedPage(startPage + 10);
      void args.refetch({ page: startPage + 10 });
    }
  };
  return {
    startPage,
    activedPage,
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
