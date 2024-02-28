import type { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IFormData {
  contents: string;
}
export interface IQuestionWriteProps {
  isEdit?: boolean;
  el?: IUseditemQuestion;
  onToggleEdit?: () => void;
}
