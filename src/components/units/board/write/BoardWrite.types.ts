import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
// Library
import type { Address } from "react-daum-postcode";

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

// UI
export interface IBoardWriteUIProps {
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;

  // React Hook Form
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  onSubmitHandler: (data: IFormValues) => void;
  errors?: FieldErrors<IFormValues>;

  // Postcode Modal
  isOpenPostcodeModal: boolean;
  showPostcodeModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: Address) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
