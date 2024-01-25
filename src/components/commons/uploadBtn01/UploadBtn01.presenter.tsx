import styled from "@emotion/styled";
import type { ChangeEvent, RefObject } from "react";

interface IUploadBtnUI01Props {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: any;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const UploadImg = styled.img``;
const UploadInput = styled.input`
  display: none;
`;
const UploadButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 78px;
  background-color: #eee;
`;

export default function UploadBtnUI(props: IUploadBtnUI01Props): JSX.Element {
  return (
    <>
      {props.fileUrl ? (
        <UploadImg onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <span>+</span>
          <span>Upload</span>
        </UploadButton>
      )}
      <UploadInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
