import type { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IFormData {
  writer: string;
  password: string;
  contents: string;
  rating?: number;
}
export interface IQuestionWriteProps {
  isEdit?: boolean;
  el?: IUseditemQuestion;
  onToggleEdit?: () => void;
}
