import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IRadio01Props {
  register: UseFormRegisterReturn;
  readOnly?: boolean;
}

const Radio = styled.input`
  display: inline-block;
`;

export default function Radio01(props: IRadio01Props): JSX.Element {
  return <Radio type="radio" {...props.register} />;
}
