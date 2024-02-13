import type { IQuery } from "../../../../commons/types/generated/types";

export interface MarketDetailUIProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickMoveToPage: (path: string) => () => void;
  onClickDeleteMarketDetail: () => Promise<void>;
}
