import { HeartFilled } from "@ant-design/icons";

interface IIconProps {
  size: number;
}

const iconStyles = {
  color: "#f00",
};
export default function HeartIcon01(props: IIconProps): JSX.Element {
  return <HeartFilled style={{ fontSize: `${props.size}px`, ...iconStyles }} />;
}
