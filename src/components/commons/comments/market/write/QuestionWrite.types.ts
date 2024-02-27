import type { IBoardComment } from "../../../../../commons/types/generated/types";

export interface IFormData {
  writer: string;
  password: string;
  contents: string;
  rating?: number;
}
export interface ICommentWriteProps {
  isEdit?: boolean;
  el?: IBoardComment;
  onToggleEdit?: () => void;
}
