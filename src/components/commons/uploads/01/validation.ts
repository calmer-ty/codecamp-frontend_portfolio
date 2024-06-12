import { Modal } from "antd";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function checkValidationImg(file?: File): boolean {
  if (file?.size === undefined) {
    Modal.error({ content: "파일이 없습니다" });
    return false;
  }
  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: "파일이 사이즈가 큽니다. (5MB이하)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다. (png, jpeg만 가능)",
    });
    return false;
  }
  return true;
}
