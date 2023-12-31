import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardListUIProps {
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;

  data?: Pick<IQuery, "fetchBoards">;
}
