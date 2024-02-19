interface IAArgs {
  text: string;
}
export default function LinkBtn01(args: IAArgs) {
  const aStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "180px",
    height: "52px",
    border: "1px solid #bdbdbd",
    cursor: "pointer",
  };
  return (
    <a
      style={{
        ...aStyle,
      }}
    >
      {args.text}
    </a>
  );
}
