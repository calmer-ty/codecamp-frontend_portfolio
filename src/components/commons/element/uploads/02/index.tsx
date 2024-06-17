import { useRef } from "react";
import { useUploadFile } from "../../../hooks/mutations/useUploadFile";
import { checkValidationImg } from "../../../../../commons/libraries/validation";
import { Modal } from "antd";

import type { ChangeEvent } from "react";
import type { IUpload01Props } from "./types";
import * as S from "./styles";

export default function Upload01(props: IUpload01Props): JSX.Element {
  const [uploadFile] = useUploadFile();

  // 참조 기능
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  // 업로드 기능
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event?.target.files?.[0];
    if (file === undefined) return;

    const isValid = checkValidationImg(file);
    if (isValid === undefined) return;

    try {
      const result = await uploadFile({ variables: { file } });
      if (result.data?.uploadFile.url === undefined) return;
      // 업로드 API 결과 값과, 프리젠터에서 받은 index를 게시판 컨테이너로 전달인자를 보낸다
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 업로드할 이미지 지우기
  const onClickImgRemove = (): void => {
    props.onChangeFileUrls("", props.index);
  };

  return (
    <>
      {props.fileUrl !== "" ? (
        <S.UploadWrap>
          <S.UploadImg onClick={onClickUpload} src={`http://storage.googleapis.com/${props.fileUrl}`} />
          <S.UploadCloseButton onClick={onClickImgRemove} />
        </S.UploadWrap>
      ) : (
        <S.UploadBtn type="button" onClick={onClickUpload}>
          <>+</>
          <>Upload</>
        </S.UploadBtn>
      )}

      <S.UploadInput type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}
