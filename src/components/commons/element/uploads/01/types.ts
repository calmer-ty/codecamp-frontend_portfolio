export interface IUploadProps {
  fileUrl: string;
  index: number;
  file?: File;
  onChangeFileUrls: (fileUrl: string, index: number, file?: File) => void;
}
