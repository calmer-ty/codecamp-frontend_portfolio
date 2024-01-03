import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface BoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;

  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}
