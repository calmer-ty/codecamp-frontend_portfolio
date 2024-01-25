import { useRef } from "react";
import * as S from "./Upload01.styles";

export default function Upload01(props: any): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };
  return (
    <>
      {/* <S.UploadImg src={`http://storage.googleapis.com/${}`} /> */}
      <S.UploadBtn onClick={onClickUpload}>
        <>+</>
        <>Upload</>
      </S.UploadBtn>
      <S.UploadInput type="file" ref={fileRef} onChange={props.onChangeFile} />
    </>
  );
}
