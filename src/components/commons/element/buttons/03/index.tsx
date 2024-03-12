interface IButtonArgs {
  text: string;
}

const buttonStyle = {
  width: "100%",
  height: "64px",
  marginTop: "20px",
  borderRadius: "16px",
  fontWeight: "bold",
  backgroundColor: "#4f4f4f",
  color: "#fff",
};

export default function Button03(args: IButtonArgs) {
  return (
    <button
      style={{
        ...buttonStyle,
      }}
    >
      {args.text}
    </button>
  );
}
