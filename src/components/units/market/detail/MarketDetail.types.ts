import type { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailHeaderProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IMarketDetailBodyProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickDelete: () => Promise<void>;
}
