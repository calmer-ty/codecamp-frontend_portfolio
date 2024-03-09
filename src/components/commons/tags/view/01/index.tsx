import type { Maybe } from "yup";

interface IPProps {
  tags: Maybe<string[]> | undefined;
}

const pStyles = {
  display: "flex",
  columnGap: "6px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export default function TagsView01(props: IPProps) {
  return <p style={pStyles}>{props.tags?.map((el) => <span key={el}>#{el}</span>)}</p>;
}
