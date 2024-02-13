interface IDivProps {
  text: string;
  color?: string;
  fontSize?: string;
}

const divStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "16px",
};

export default function Text01(props: IDivProps): JSX.Element {
  return <div style={props.fontSize}>{props.text}</div>;
}
