import type { IUploadBtnUI01Props } from "./UpdateBtn01.types";
import * as S from "./UpdateBtn01.styles";

export default function UploadBtnUI(props: IUploadBtnUI01Props): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`http://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadBtn onClick={props.onClickUpload}>
          <span>+</span>
          <span>Upload</span>
        </S.UploadBtn>
      )}
      <S.UploadInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
