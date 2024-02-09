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

export const schemaBoardWrite = yup.object({
  writer: yup.string().required("작성자 입력은 필수입니다."),
  password: yup.string().required("비밀번호 입력은 필수입니다."),
  title: yup.string().required("제목 입력은 필수입니다."),
  contents: yup.string().required("내용 입력은 필수입니다."),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  youtubeUrl: yup.string(),
  mainSetting: yup.string(),
});

export const schemaMemberLogin = yup.object({
  email: yup
    .string()
    .required("이메일 입력은 필수입니다.")
    .email("이메일 형식에 맞지 않습니다."),
  name: yup.string().required("이름 입력은 필수입니다."),
  password: yup
    .string()
    .required("비밀번호 입력은 필수입니다.")
    .min(4, "비밀번호는 4자리 이상이여야 합니다")
    .max(16, "비밀번호는 16자리 이하이여야 합니다"),
  passwordCheck: yup
    .string()
    .required("비밀번호를 재입력해주세요.")
    .min(4, "비밀번호는 4자리 이상이여야 합니다")
    .max(16, "비밀번호는 16자리 이하이여야 합니다"),
});

export const schemaProductWrite = yup.object({
  name: yup.string().required("상품명 입력은 필수입니다."),
  remarks: yup.string().required("상품요약 입력은 필수입니다."),
  contents: yup.string().required("상품내용 입력은 필수입니다."),
  price: yup.number().required("상품가격 입력은 필수입니다."),
});
