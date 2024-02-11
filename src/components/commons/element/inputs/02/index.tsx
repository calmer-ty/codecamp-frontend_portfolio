import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  register?: UseFormRegisterReturn;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
}

const Input = styled.input`
  width: 384px;
  height: 64px;
  padding: 0 16px;
  border-radius: 16px;
`;

export default function Input02(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      {...props.register}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
    />
  );
}
