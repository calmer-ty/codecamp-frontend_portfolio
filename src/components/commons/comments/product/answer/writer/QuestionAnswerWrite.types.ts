import type { IUseditemQuestionAnswer } from "../../../../../../commons/types/generated/types";

export interface IQuestionAnswerWriteProps {
  isEdit?: boolean;
  onToggleEdit?: () => void;
  el?: IUseditemQuestionAnswer;
  id?: string;
}
export interface IFormData {
  contents: string;
}
