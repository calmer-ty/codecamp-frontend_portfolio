import { HeartFilled } from "@ant-design/icons";

interface IPickedProps {
  type?: string;
  count: number;
}

const articleStyles = {
  display: "flex",
  gap: "4px",
};
const iconStyles = {
  fontSize: "20px",
  color: "#f00",
};

export default function Picked01(props: IPickedProps): JSX.Element {
  return (
    <article style={{ ...articleStyles, flexDirection: props.type === "column" ? "column" : "row" }}>
      <HeartFilled style={iconStyles} />
      <span>{props.count}</span>
    </article>
  );
}
