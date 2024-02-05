import type { ChangeEvent } from "react";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormInputs {
  email: string;
  name: string;
  password: string;
}
export interface IMemberJoinUIProps {
  onClickJoin: () => void;
  register: UseFormRegister<IFormInputs>;
  handleSubmit: UseFormHandleSubmit<IFormInputs, undefined>;
  errors: FieldErrors<IFormInputs>;

  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
}
