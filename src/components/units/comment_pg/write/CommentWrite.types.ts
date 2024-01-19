import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  // CommentItem Props
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}
export interface ICommentWriteUIProps {
  // CommentItem Props
  isEdit?: boolean;

  // CommentWrite Props
  inputs: {
    writer: string;
    password: string;
  };
  contents: string;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  onClickUpdateCancel: () => void;
}
