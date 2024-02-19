import { useMoveToPage } from "../../../hooks/customs/useMoveToPage";

interface IButtonArgs {
  text: string;
  path: string;
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
};
const iconStyle = {
  marginRight: "8px",
};

export default function Button02(args: IButtonArgs) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <button
      style={{
        ...buttonStyle,
      }}
      onClick={onClickMoveToPage(args.path)}
    >
      <img style={iconStyle} src="/images/board/list/ic_create.png"></img>
      {args.text}
    </button>
  );
}
