import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface IMarketListHeaderProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IMarketListBodyProps {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  keyword: string;
}
export interface IKeywordTokenProps {
  isMatched: boolean;
}
