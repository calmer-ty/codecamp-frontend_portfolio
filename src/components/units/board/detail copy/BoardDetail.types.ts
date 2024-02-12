import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToPage: (path: string) => () => void;
  // onClickMoveToBoardList: (event: MouseEvent<HTMLButtonElement>) => void;
  // onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;

  // 좋아요 기능 타입
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;
}
