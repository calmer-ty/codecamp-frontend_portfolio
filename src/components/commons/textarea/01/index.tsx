import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface ITextareaProps {
  register: UseFormRegisterReturn;
  placeholder?: string;
  defaultValue?: string;
  readOnly?: boolean;
}

const Textarea = styled.textarea`
  width: 1000px;
  height: 480px;
  padding: 12px;
`;

export default function Textarea01(props: ITextareaProps): JSX.Element {
  return <Textarea {...props.register} />;
}
