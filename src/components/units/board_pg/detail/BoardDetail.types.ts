import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;

  // 좋아요 기능 타입
  likeScore: number;
  onClickLikeScore: (event: MouseEvent<HTMLSpanElement>) => void;
  disLikeScore: number;
  onClickDisLikeScore: (event: MouseEvent<HTMLSpanElement>) => void;
}
