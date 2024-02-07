import type { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  youtubeUrl?: string;
  setting?: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// export interface ISubmitButtonProps {
//   isActive: boolean;
// }
