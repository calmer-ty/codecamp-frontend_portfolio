import { useRef, useState } from "react";
// Style
import * as S from "./Upload01.styles";
// Type
import type { ChangeEvent } from "react";
import checkValidationImg from "./Upload01.validation";

interface IUpload01Props {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (file: File, fileUrl: string, index: number) => void;
}

export default function Upload01(props: IUpload01Props): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  console.log(props.fileUrl);
  // const [imageFile, setImageFile] = useState<File>();

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
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      // console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        // setImageFile(file);
        props.onChangeFileUrls(file, imageUrl, props.index);
      }
    };
  };

  return (
    <>
      {imageUrl !== "" || props.fileUrl !== "" ? (
        // fileUrl에 값이 있다면 이미지 요소를 보여주고 없다면 버튼을 보여준다
        <S.UploadImg
          // 참조한 UploadInput을 클릭 이벤트로 넣어준다
          onClick={onClickUpload}
          // src={`http://storage.googleapis.com/${props.fileUrl}` ?? imageUrl}
          src={imageUrl !== "" ? imageUrl : `http://storage.googleapis.com/${props.fileUrl}`}
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
