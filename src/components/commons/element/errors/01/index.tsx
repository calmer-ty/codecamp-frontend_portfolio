interface IDivProps {
  text?: string;
}

const divStyle = {
  height: "20px",
  marginTop: "4px",
  padding: "0 12px",
  fontSize: "16px",
  color: "red",
};

export default function Error01(props: IDivProps): JSX.Element {
  return <div style={divStyle}>{props.text}</div>;
}
