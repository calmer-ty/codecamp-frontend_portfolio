import type { IBoardComment, IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IFormData {
  contents: string;
}
export interface IQuestionWriteProps {
  isEdit: boolean;
  el?: IUseditemQuestion | IBoardComment;
  onToggleEdit?: () => void;
}
