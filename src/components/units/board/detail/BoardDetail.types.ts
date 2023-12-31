import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDetailUIProps {
  onClickMoveToBoardList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
}
