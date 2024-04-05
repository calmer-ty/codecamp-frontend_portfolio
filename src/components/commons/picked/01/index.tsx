import { HeartFilled } from "@ant-design/icons";
import type { Maybe } from "yup";

interface IPicked01Props {
  text: Maybe<number> | undefined;
}

const iconStyles = {
  fontSize: "18px",
  color: "#f00",
};
const divStyles = {
  display: "flex",
  columnGap: "5px",
  alignItems: "center",
  flexDirection: "row" as "row" | "row-reverse" | "column" | "column-reverse",
};

export default function Picked01(props: IPicked01Props): JSX.Element {
  return (
    <div style={divStyles}>
      <HeartFilled style={iconStyles} />
      <span>{props.text}</span>
    </div>
  );
}
