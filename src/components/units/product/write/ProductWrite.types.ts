import type { IQuery } from "../../../../commons/types/generated/types";

// container
export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  // zipcode: string;
  // address: string;
  // addressDetail: string;
  mainSetting?: string;
}

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
