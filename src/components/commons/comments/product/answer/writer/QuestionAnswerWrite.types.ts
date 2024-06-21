import type { IUseditemQuestionAnswer } from "../../../../../../commons/types/generated/types";

export interface IQuestionAnswerWriteProps {
  isEdit: boolean;
  useditemQuestionId: string;
  onToggleEdit?: () => void;
  el?: IUseditemQuestionAnswer;
}
export interface IFormData {
  contents: string;
}
