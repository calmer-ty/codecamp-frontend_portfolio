import type { Maybe } from "yup";

export interface IPickedProps {
  text: Maybe<number> | undefined;
  style?: React.CSSProperties;
}
