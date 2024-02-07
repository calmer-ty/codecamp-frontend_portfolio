import { Modal } from "antd";
import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const checkValidation = (file?: File): boolean => {
  if (typeof file === "undefined") {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: "파일 용량이 너무 큽니다. (5MB 이하)" });
    return false;
  }
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다. (jpeg/png만 가능합니다.)",
    });
    return false;
  }
  return true;
};

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  youtubeUrl: yup.string(),
  mainSetting: yup.string(),
});
