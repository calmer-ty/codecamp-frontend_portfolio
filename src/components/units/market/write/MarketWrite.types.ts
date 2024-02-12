import type {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

// container
export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  tags?: string[];
  mainSetting?: boolean;
}

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMarketWriteUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  zipcode: string;
  address: string;
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData, undefined>;
  formState: FormState<IFormData>;
  onClickSubmit: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  isOpen: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
}
