import type { IQuery } from "../../../../commons/types/generated/types";

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
  mainSetting?: string;
}

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
