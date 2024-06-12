import { HeartOutlined } from "@ant-design/icons";

interface IIconProps {
  size: number;
}

const iconStyles = {
  color: "#f00",
};
export default function HeartIcon02(props: IIconProps): JSX.Element {
  return <HeartOutlined style={{ fontSize: `${props.size}px`, ...iconStyles }} />;
}
