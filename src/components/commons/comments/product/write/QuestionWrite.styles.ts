import styled from "@emotion/styled";
import type { IQuestionWriteProps } from "./QuestionWrite.types";

export const QuestionWrite = styled.article`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  border-top: ${(props: IQuestionWriteProps) => (props.isEdit ? "1px solid #bdbdbd" : "")};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
