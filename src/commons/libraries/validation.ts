import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const checkValidationImg = async (file?: File): Promise<boolean> => {
  const { Modal } = await import("antd");
  if (typeof file === "undefined") {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: "파일 용량이 너무 큽니다. (5MB 이하)" });
    return false;
  }
  if (!file.type.includes("jpeg") && !file.type.includes("png") && !file.type.includes("webp")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다. (jpeg/png/webp만 가능합니다.)",
    });
    return false;
  }
  return true;
};

export const isValidURL = (url: string): boolean => {
  const pattern = /^https?:\/\//i;

  return pattern.test(url);
};

const passwordSchema = yup.string().required("비밀번호 입력은 필수입니다.").min(4, "비밀번호는 4자리 이상이여야 합니다").max(16, "비밀번호는 16자리 이하이여야 합니다");

export const schemaBoardWrite = yup.object({
  writer: yup.string().required("작성자 입력은 필수입니다."),
  password: passwordSchema,
  title: yup.string().required("제목 입력은 필수입니다."),
  contents: yup.string().required("내용 입력은 필수입니다."),
});
export const schemaBoardComment = yup.object({
  writer: yup.string().required("작성자 입력은 필수입니다."),
  password: passwordSchema,
  contents: yup.string().required("내용 입력은 필수입니다."),
});
export const schemaProductQuestion = yup.object({
  contents: yup.string().required("내용 입력은 필수입니다."),
});

export const schemaUserLogin = yup.object({
  email: yup.string().required("이메일 입력은 필수입니다.").email("이메일 형식에 맞지 않습니다."),
  password: passwordSchema,
});
export const schemaUserJoin = yup.object({
  email: yup.string().required("이메일 입력은 필수입니다.").email("이메일 형식에 맞지 않습니다."),
  name: yup.string().required("이름 입력은 필수입니다."),
  password: passwordSchema,
  passwordCheck: passwordSchema,
});

export const schemaProductWrite = yup.object({
  name: yup.string().required("상품명은 필수입니다."),
  remarks: yup.string().required("상품한줄은 필수입니다."),
  contents: yup.string().required("상품설명은 필수입니다."),
  price: yup.number().typeError("숫자를 입력해주세요.").required("상품가격은 필수입니다."),
  // tags: yup.array().of(yup.string()).required("태그는 하나 이상 입력해야 합니다."),
  tags: yup.array().optional(),
  address: yup.string().required("거래장소 선택은 필수입니다."),
  lat: yup.number().typeError("위치를 선택해주세요").required("위도를 입력해주세요."),
  lng: yup.number().typeError("위치를 선택해주세요").required("경도를 입력해주세요."),
});
