import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface IMarketListBodyProps {
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IKeywordTokenProps {
  isMatched: boolean;
}
