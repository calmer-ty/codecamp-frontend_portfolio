import type { ChangeEvent } from "react";

export interface ISearchBarInput {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
