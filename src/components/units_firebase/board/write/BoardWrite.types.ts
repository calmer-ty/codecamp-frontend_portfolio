import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
// Library
import type { Address } from "react-daum-postcode";
import type { DocumentData } from "firebase/firestore";

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
  docData?: DocumentData;
}

// UI
export interface IBoardWriteUIProps {
  docData?: DocumentData;
  isEdit: boolean;
  isActive: boolean;

  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => Promise<void>;

  // React Hook Form
  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  onSubmitHandler: (data: IFormValues) => void;
  errors?: FieldErrors<IFormValues>;

  // Zipcode
  isOpenAddressModal: boolean;
  zipcode: string;
  address: string;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
