import { useRef, useState } from "react";
import { checkValidationImg } from "../../../../../commons/libraries/validation";

import type { ChangeEvent } from "react";
import type { IUploadProps } from "./types";
import * as S from "./styles";

export default function Upload01(props: IUploadProps): JSX.Element {
  const [fileReaderUrl, setFileReaderUrl] = useState("");

  // 참조 기능
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event?.target.files?.[0];
    if (file === undefined) return;

    // 파일 업로드 조건을 걸어준다
    const isValid = checkValidationImg(file);
    console.log(isValid);
    if (isValid === undefined) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setFileReaderUrl(event.target?.result);
        props.onChangeFileUrls(props.fileUrl ?? "", props.index, file);
      }
    };
  };

  const imageSrc = fileReaderUrl !== "" ? fileReaderUrl : props.fileUrl !== "" ? `http://storage.googleapis.com/${props.fileUrl}` : "";

  return (
    <>
      {imageSrc !== "" ? (
        // fileUrl에 값이 있다면 이미지 요소를 보여주고 없다면 버튼을 보여준다
        <S.UploadImg
          // 참조한 UploadInput을 클릭 이벤트로 넣어준다
          onClick={onClickUpload}
          // src={`http://storage.googleapis.com/${props.fileUrl}` ?? fileReaderUrl}
          src={imageSrc}
        />
      ) : (
        <S.UploadBtn
          // 참조한 UploadInput을 클릭 이벤트로 넣어준다
          type="button"
          onClick={onClickUpload}
        >
          <>+</>
          <>Upload</>
        </S.UploadBtn>
      )}
      {/* UploadInput을 참조한다 */}
      <S.UploadInput type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}
