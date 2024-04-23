import type { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailHeaderProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IProductDetailBodyProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  // onClickDelete: () => Promise<void>;
}
