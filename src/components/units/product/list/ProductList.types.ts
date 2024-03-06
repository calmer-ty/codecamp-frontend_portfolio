import type { IUseditem } from "../../../../commons/types/generated/types";

export interface IKeywordTokenProps {
  isMatched: boolean;
}

export interface IProductListProps {
  onClickTodayView: (product: IUseditem) => () => void;
}
