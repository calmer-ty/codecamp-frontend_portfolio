import { useRef } from "react";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { checkValidation } from "../../../../commons/libraries/validation";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import UploadBtnUI from "./UploadBtn01.presenter";
import { UPLOAD_FILE } from "./UploadBtn01.queries";
import type { IUploadBtn01Props } from "./UploadBtn01.types";
import { Modal } from "antd";

export default function UploadBtn01(props: IUploadBtn01Props): JSX.Element {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result);
      if (result.data === undefined || result.data == null) return;

      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadBtnUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
