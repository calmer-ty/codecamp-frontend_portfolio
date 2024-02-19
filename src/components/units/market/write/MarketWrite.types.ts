import type { IQuery } from "../../../../commons/types/generated/types";

// container
export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images?: string[];
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  tags?: string[];
}

export interface IMarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
