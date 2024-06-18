import type { IUseditemQuestion } from "../../../../../../commons/types/generated/types";

export interface IQuestionAnswerWriteProps {
  isEdit?: boolean;
  onToggleEdit?: () => void;
  el?: IUseditemQuestion;
}
export interface IFormData {
  contents: string;
}
