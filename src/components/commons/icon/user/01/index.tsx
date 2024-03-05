import { UserOutlined } from "@ant-design/icons";

interface IIconProps {
  size: number;
  padding: number;
}

const iconStyles = {
  borderRadius: "50%",
  backgroundColor: "#bdbdbd",
  color: "#ffffff",
};
export default function UserIcon01(props: IIconProps): JSX.Element {
  return <UserOutlined style={{ fontSize: `${props.size}px`, padding: `${props.padding}px`, ...iconStyles }} />;
}
