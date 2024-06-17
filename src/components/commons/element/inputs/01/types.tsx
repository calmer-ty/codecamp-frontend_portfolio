import type { UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  type?: "text" | "password";
  placeholder?: string;
  defaultValue?: string | number;
  // value?: string | number;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
  onChange?: any;
}
