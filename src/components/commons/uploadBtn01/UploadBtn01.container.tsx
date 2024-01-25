import { useRef } from "react";
import type { ChangeEvent } from "react";
import { checkValidation } from "../../../commons/libraries/validation";
import UploadBtnUI from "./UploadBtn01.presenter";

interface IUploadBtn01Props {
  index: number;
  onChangeFiles: (file: File, index: number, url: string) => void;
  fileUrls: string[];
}

export default function UploadBtn01(props: IUploadBtn01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  async function onChangeFile(
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    if (!checkValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      props.onChangeFiles(file, props.index, data.target?.result as string);
    };
  }

  return (
    <UploadBtnUI
      fileRef={fileRef}
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
