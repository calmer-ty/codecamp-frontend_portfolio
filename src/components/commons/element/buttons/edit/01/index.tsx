import styled from "@emotion/styled";
import { EditOutlined } from "@ant-design/icons";

interface IButtonArgs {
  onClick: () => void;
}

const DeleteButton = styled(EditOutlined)`
  font-size: 20px;
  color: #777;
`;

export default function EditBtn01(props: IButtonArgs): JSX.Element {
  return <DeleteButton size={60} onClick={props.onClick} />;
}
