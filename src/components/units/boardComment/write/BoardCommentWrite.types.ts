import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface BoardCommentWriteProps {
  // 댓글 등록/수정 분기처리
  isEdit?: boolean;
  el?: any;
}

export interface BoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;

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
