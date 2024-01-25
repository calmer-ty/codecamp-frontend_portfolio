import { Modal } from "antd";

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
