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
export interface IFormInputs {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  zipcode: string;
  address: string;
  addressDetail: string;
  // mainSetting: string;
}

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// UI
export interface IProductWriteUIProps {
  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  // onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;

  // React Hook Form
  register: UseFormRegister<IFormInputs>;
  handleSubmit: UseFormHandleSubmit<IFormInputs>;
  errors: FieldErrors<IFormInputs>;

  // Zipcode
  isOpen: boolean;
  zipcode: string;
  address: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;

  // Upload
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
