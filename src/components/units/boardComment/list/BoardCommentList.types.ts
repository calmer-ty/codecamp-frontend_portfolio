import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface BoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;

  isOpenDeleteModal: boolean;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCloseDeleteModal: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
