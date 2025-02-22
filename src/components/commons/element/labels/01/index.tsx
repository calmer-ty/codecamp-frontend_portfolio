interface IDivProps {
  text: string;
}

const divStyle = { fontSize: "16px", fontWeight: "bold", marginBottom: "16px" };

export default function Label01(props: IDivProps): JSX.Element {
  return <span style={divStyle}>{props.text}</span>;
}
