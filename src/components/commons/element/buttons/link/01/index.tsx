interface IAArgs {
  text: string;
}

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "flex-end",
  width: "170px",
  height: "52px",
  fontWeight: "bold",
  border: "1px solid #d9d9d9",
  borderRadius: "10px",
  cursor: "pointer",
};
const iconStyle = {
  marginRight: "6px",
};

export default function LinkBtn01(args: IAArgs) {
  return (
    <a
      style={{
        ...buttonStyle,
      }}
    >
      <img style={iconStyle} src="/images/board/list/ic_create.png"></img>
      {args.text}
    </a>
  );
}
