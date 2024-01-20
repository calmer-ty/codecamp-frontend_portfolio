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
  address: string;
  addressDetail: string;
  zipcode: string;
  youtubeUrl: string;
  mainSetting: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// UI
export interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;

  // React Hook Form
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  onSubmitHandler: (data: IFormValues) => void;
  errors?: FieldErrors<IFormValues>;

  // Zipcode
  isOpen: boolean;
  zipcode: string;
  address: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
