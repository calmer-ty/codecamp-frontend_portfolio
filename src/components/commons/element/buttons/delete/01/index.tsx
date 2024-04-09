interface IButtonArgs {
  onClick: () => void;
}

const buttonStyle = {
  width: "18px",
  height: "18px",
  background: "url('/images/boardComment/list/ic_exit.png') no-repeat center/contain",
};
export default function DeleteBtn01(props: IButtonArgs) {
  return <button style={buttonStyle} onClick={props.onClick}></button>;
}
