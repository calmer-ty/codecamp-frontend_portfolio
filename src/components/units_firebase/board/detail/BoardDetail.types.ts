import type { MouseEvent } from "react";

export interface BoardDetailUIProps {
  onClickMoveToBoardList: (event: MouseEvent<HTMLButtonElement>) => void;
}
