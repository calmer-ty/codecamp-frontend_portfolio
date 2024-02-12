import { useState } from "react";
import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import _ from "lodash";

interface IUseSearchbarArgs {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchCount: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>> | undefined;
}
export const useSearchbar = (props: IUseSearchbarArgs) => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props?.refetchCount({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return { keyword, onChangeSearch };
};
