import type { ChangeEvent, RefObject } from "react";

export interface IUploadBtn01Props {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}
export interface IUploadBtnUI01Props {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}
