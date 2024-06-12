import type { IQuery } from "../../../../commons/types/generated/types";

export interface IFormDataProductWrite {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images?: string[];
  lat: number;
  lng: number;
  address: string;
  addressDetail?: string;
  tags?: string[];
}

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
