import type { Dispatch, SetStateAction } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  register?: UseFormRegisterReturn;
  width?: number;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: Dispatch<SetStateAction<string | undefined>>;
}

const inputStyles = {
  height: "52px",
  padding: "0 16px",
};

export default function InputCustom(props: IInputProps): JSX.Element {
  return (
    <input
      style={{ width: `${props.width}px`, ...inputStyles }}
      type={props.type ?? "text"}
      {...props.register}
      value={props.value}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      onChange={props.onChange}
    />
  );
}
