import type { MouseEvent } from "react";

export interface IPageProps {
  isActive: boolean;
}
export interface IPageBtnProps {
  isDisabled: boolean;
}

export interface IPagination01Props {
  startPage: number;
  activedPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
