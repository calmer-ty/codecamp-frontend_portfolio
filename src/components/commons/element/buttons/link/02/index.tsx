import Link from "next/link";

interface ILink02Args {
  text: string;
  href: string;
}

const aStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "flex-end",
  width: "170px",
  height: "52px",
  border: "1px solid #bdbdbd",
  backgroundColor: "#fff",
  cursor: "pointer",
  color: "#000",
};

export default function LinkButton02(args: ILink02Args): JSX.Element {
  return (
    <Link href={args.href}>
      <a style={aStyle}>{args.text}</a>
    </Link>
  );
}
