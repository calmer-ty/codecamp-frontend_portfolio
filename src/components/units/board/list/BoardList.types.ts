import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IKeywordTokenProps {
  isMatched: boolean;
}

export interface IBoardDetailHeaderProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface IBoardDetailBodyProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  keyword: string;
}
