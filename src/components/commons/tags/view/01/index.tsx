import type { Maybe } from "yup";

interface IPProps {
  tags: Maybe<string[]> | undefined;
}

const pStyles = {
  display: "flex",
  columnGap: "6px",
};
const spanStyles = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export default function TagsView01(props: IPProps): JSX.Element {
  return (
    <p style={pStyles}>
      {props.tags?.map((el) => (
        <span style={spanStyles} key={el}>
          #{el}
        </span>
      ))}
    </p>
  );
}
