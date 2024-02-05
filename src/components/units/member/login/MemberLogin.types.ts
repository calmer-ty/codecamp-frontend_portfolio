import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormInputs {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  onClickLogin: () => Promise<void>;

  // Form
  register: UseFormRegister<IFormInputs>;
  handleSubmit: UseFormHandleSubmit<IFormInputs>;
  errors: FieldErrors<IFormInputs>;
}
