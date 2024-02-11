import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  placeholder?: string;
  defaultValue?: string;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
}

const inputStyle = {
  height: "52px",
  padding: "0 16px",
};

export default function Input01(props: IInputProps): JSX.Element {
  return (
    <input
      style={inputStyle}
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
      {...props.register}
    />
  );
}
