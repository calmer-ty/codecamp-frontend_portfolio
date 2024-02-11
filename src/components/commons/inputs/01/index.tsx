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
  /* width: 1000px; */
  height: 52px;
  padding: 0 16px;
`;

export default function Input01(props: IInputProps): JSX.Element {
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
