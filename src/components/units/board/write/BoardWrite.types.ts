import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

// container
export interface IFormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
  address1: string;
  address2: string;
  youtubeUrl: string;
  mainSetting: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// presenter
export interface IBoardWriteUIProps {
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;

  // react hook form
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  onSubmitHandler: (data: IFormValues) => void;
  errors?: FieldErrors<IFormValues>;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
