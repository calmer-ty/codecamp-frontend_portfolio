import type { MouseEvent } from "react";

export interface BoardListUIProps {
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;
  boardsData: any;
}
