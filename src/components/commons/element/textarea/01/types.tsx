import type { UseFormRegisterReturn } from "react-hook-form";

export interface ITextareaProps {
  placeholder: string;
  defaultValue?: string | number;
  register: UseFormRegisterReturn;

  word: number;
  isEdit?: boolean;
  onToggleEdit?: () => void;

  btnName: string;
}
