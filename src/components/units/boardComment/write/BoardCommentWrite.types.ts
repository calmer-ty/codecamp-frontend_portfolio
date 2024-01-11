import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface BoardCommentWriteProps {
  // 댓글 등록/수정 분기처리
  isEdit?: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface BoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;

  writer: string;
  password: string;
  contents: string;
  // 별점
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;

  // 댓글 등록/수정 분기처리
  isEdit?: boolean;
  el?: any;
}
