import type { IQuery } from "../../../../commons/types/generated/types";
import type {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
// Library
import type { Address } from "react-daum-postcode";

// container
export interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  youtubeUrl?: string;
  mainSetting?: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// UI
export interface IBoardWriteUIProps {
  onClickSubmit: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;

  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard"> | undefined;

  // React Hook Form
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  formState: FormState<IFormData>;

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
