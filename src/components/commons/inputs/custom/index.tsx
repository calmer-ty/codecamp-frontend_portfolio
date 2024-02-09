import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  register?: UseFormRegisterReturn;
  width: number;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
}

const Input = styled.input`
  height: 52px;
  padding: 0 16px;
`;

export default function InputCustom(props: IInputProps): JSX.Element {
  return (
    <Input
      style={{ width: `${props.width}px` }}
      type={props.type ?? "text"}
      {...props.register}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
    />
  );
}
