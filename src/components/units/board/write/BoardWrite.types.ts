import type { IQuery } from "../../../../commons/types/generated/types";
// import type {
//   FormState,
//   UseFormHandleSubmit,
//   UseFormRegister,
// } from "react-hook-form";
// // Library
// import type { Address } from "react-daum-postcode";

// container
export interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  images?: string[];
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
