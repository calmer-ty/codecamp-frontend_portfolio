import type { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
