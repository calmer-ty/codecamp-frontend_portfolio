import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { Maybe } from "yup";

interface IPicked01Props {
  text: Maybe<number> | undefined;
  style?: React.CSSProperties;
}

const LikeRate = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const IconHeart = styled(HeartFilled)`
  font-size: 18px;
  color: #f00;
`;

export default function Picked01(props: IPicked01Props): JSX.Element {
  return (
    <LikeRate style={{ ...props.style }}>
      <IconHeart />
      <span>{props.text}</span>
    </LikeRate>
  );
}
