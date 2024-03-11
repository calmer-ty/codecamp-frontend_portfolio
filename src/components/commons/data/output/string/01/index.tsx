interface IDataOutputString01 {
  text: string;
  size?: number;
}

const pStyles = {
  marginBottom: "4px",
  color: "#4f4f4f",
};

export default function DataOutputString01(props: IDataOutputString01): JSX.Element {
  return (
    <p
      style={{
        fontSize: `${props.size}px`,
        ...pStyles,
      }}
    >
      {props.text}
    </p>
  );
}
