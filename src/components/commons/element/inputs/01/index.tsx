import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  placeholder?: string;
  defaultValue?: string | number;
  // value?: string | number;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
  onChange?: any;
}

const inputStyle = {
  height: "52px",
  padding: "0 16px",
  border: "1px solid #777",
};

export default function Input01(props: IInputProps): JSX.Element {
  return (
    <input
      style={inputStyle}
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      // value={props.value}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
      onChange={props.onChange}
      {...props.register}
    />
  );
}
