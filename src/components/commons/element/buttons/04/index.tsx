import Link from "next/link";

interface ILink01Args {
  text: string;
  href: string;
  style?: React.CSSProperties;
}

const aStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "flex-end",
  width: "170px",
  height: "52px",
  fontWeight: "bold",
  border: "1px solid #d9d9d9",
  backgroundColor: "#fff",
  borderRadius: "10px",
  cursor: "pointer",
};
const iconStyle = {
  marginRight: "6px",
};

export default function LinkButton01(args: ILink01Args): JSX.Element {
  return (
    <Link href={args.href}>
      <a style={aStyle}>
        <img style={iconStyle} src="/images/board/list/ic_create.png"></img>
        {args.text}
      </a>
    </Link>
  );
}
