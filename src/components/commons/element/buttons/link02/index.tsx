interface IAArgs {
  text: string;
}
export default function LinkBtn02(args: IAArgs) {
  const aStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "-70px",
    width: "170px",
    height: "52px",
    fontWeight: "bold",
    border: "1px solid #d9d9d9",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const iconStyle = {
    marginRight: "8px",
  };
  return (
    <a
      style={{
        ...aStyle,
      }}
    >
      <img style={iconStyle} src="/images/board/list/ic_create.png"></img>
      {args.text}
    </a>
  );
}
