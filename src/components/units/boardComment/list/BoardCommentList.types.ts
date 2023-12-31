import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardCommentListUIProps {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}
