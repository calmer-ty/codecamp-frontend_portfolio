import styled from "@emotion/styled";
import { CloseOutlined } from "@ant-design/icons";

interface IButtonArgs {
  onClick: () => void;
}

const DeleteButton = styled(CloseOutlined)`
  font-size: 20px;
  color: #777;
`;

export default function DeleteBtn01(props: IButtonArgs): JSX.Element {
  return <DeleteButton onClick={props.onClick} />;
}
