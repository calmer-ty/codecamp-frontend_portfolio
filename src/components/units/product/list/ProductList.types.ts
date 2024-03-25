import type { IQuery } from "../../../../commons/types/generated/types";

export interface IKeywordTokenProps {
  isMatched: boolean;
}
export interface IProductListHeaderProps {
  data: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
}
