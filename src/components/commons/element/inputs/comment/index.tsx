import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  register?: UseFormRegisterReturn;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
}

const inputStyles = {
  width: "180px",
  height: "52px",
  padding: "0 16px",
};

export default function InputComment(props: IInputProps): JSX.Element {
  return (
    <input
      style={{ ...inputStyles }}
      type={props.type ?? "text"}
      {...props.register}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
    />
  );
}
