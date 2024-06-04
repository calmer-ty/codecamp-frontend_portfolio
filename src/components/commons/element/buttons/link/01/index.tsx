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
  color: "#000",
};
const iconStyle = {
  marginRight: "6px",
};

export const LinkButton01 = (args: ILink01Args) => {
  return (
    <Link href={args.href}>
      <a style={aStyle}>
        <img style={iconStyle} src="/images/board/list/ic_create.png"></img>
        {args.text}
      </a>
    </Link>
  );
};
