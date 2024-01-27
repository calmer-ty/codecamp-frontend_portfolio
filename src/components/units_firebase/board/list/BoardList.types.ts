import type { DocumentData } from "firebase/firestore";
import type { MouseEvent } from "react";

export interface BoardListUIProps {
  docs?: DocumentData;
  // docs?: any;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
