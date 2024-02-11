export interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  addressDetail?: string;
  youtubeUrl?: string;
  setting?: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
}
