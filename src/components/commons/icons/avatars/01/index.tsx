import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Avatar = styled(UserOutlined)`
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 48px;
  border-radius: 50%;
  background-color: #cbcbcb;
  color: white;
  border: 8px solid #cbcbcb;
`;

export default function Avatar01(): JSX.Element {
  return <Avatar />;
}
