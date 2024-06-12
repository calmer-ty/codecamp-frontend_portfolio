import { useUploadFile } from "../../hooks/mutations/useUploadFile";

export default async function useUploadFileToServer(file: File | undefined): Promise<File | undefined> {
  const [uploadFile] = useUploadFile();
  const { Modal } = await import("antd");

  try {
    const resultFile = await uploadFile({ variables: { file } });
    if (resultFile.data?.uploadFile.url === undefined) return;
    // 업로드 API 결과 값과, 프리젠터에서 받은 index를 게시판 컨테이너로 전달인자를 보낸다
    // props.onChangeFileUrls(resultFile.data?.uploadFile.url, props.index);
    return resultFile.data.uploadFile.url;
  } catch (error) {
    if (error instanceof Error) Modal.error({ content: error.message });
  }

  // return {};
}
