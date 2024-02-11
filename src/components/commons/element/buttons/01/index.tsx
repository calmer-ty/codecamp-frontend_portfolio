interface IButtonProps {
  text: string;
  isActive: boolean;
}

const buttonStyle = {
  width: "180px",
  height: "52px",
  fontWeight: "bold",
};

export default function Button01(props: IButtonProps): JSX.Element {
  console.log(props);
  return (
    <button
      style={{
        ...buttonStyle,
        backgroundColor: props.isActive ? "yellow" : "lightgray",
      }}
    >
      {props.text}
    </button>
  );
}
