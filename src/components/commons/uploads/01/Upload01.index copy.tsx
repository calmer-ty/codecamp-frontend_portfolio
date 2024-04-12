import { useRef } from "react";
// Hooks
import { useUploadFile } from "../../hooks/mutations/useUploadFile";
// Component
import { Modal } from "antd";
// Style
import * as S from "./Upload01.styles";
// Type
import type { ChangeEvent } from "react";
import checkValidationImg from "./Upload01.validation";

interface IUpload01Props {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export default function Upload01(props: IUpload01Props): JSX.Element {
  const [uploadFile] = useUploadFile();

  // 참조 기능
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event?.target.files?.[0];

    // 파일 업로드 조건을 걸어준다
    const isValid = checkValidationImg(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      if (result.data?.uploadFile.url === undefined) return;
      // 업로드 API 결과 값과, 프리젠터에서 받은 index를 게시판 컨테이너로 전달인자를 보낸다
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {props.fileUrl !== "" ? (
        // fileUrl에 값이 있다면 이미지 요소를 보여주고 없다면 버튼을 보여준다
        <S.UploadImg
          // 참조한 UploadInput을 클릭 이벤트로 넣어준다
          onClick={onClickUpload}
          src={`http://storage.googleapis.com/${props.fileUrl}`}
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
