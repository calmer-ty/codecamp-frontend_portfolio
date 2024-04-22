import {
  // useEffect,
  useRef,
  useState,
} from "react";
// Style
import * as S from "./Upload01.styles";
// Type
import type { ChangeEvent } from "react";
import checkValidationImg from "./Upload01.validation";

interface IUpload01Props {
  file?: File;
  fileUrl?: string;
  index: number;
  onChangeFileUrls: (file: File, fileUrl: string, index: number) => void;
}

export default function Upload01(props: IUpload01Props): JSX.Element {
  const [fileReaderUrl, setFileReaderUrl] = useState("");

  // 참조 기능
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };
  // useEffect(() => {
  //   console.log("===== Updated fileReaderUrl ===== :", props.index, fileReaderUrl);
  //   console.log("===== Updated fileUrl ===== :", props.index, props.fileUrl);
  // }, [fileReaderUrl]);

  // useEffect(() => {
  //   if (fileReaderUrl !== "") {
  //     props.onChangeFileUrls(fileRef.current?.files[0], props.fileUrl, props.index);
  //   }
  // }, [fileReaderUrl, props]);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event?.target.files?.[0];
    if (file === undefined) return;

    // 파일 업로드 조건을 걸어준다
    const isValid = checkValidationImg(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setFileReaderUrl(event.target?.result);
        props.onChangeFileUrls(file, props.fileUrl ?? "", props.index);
      }
    };
  };

  const imageSrc = fileReaderUrl !== "" ? fileReaderUrl : props.fileUrl !== "" ? `http://storage.googleapis.com/${props.fileUrl}` : "";

  return (
    <>
      {/* {props.fileUrl !== "" ? ( */}
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
