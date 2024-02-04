import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  // onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => Promise<void>;

  // Form
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  errors: FieldErrors<IFormValues>;
}
