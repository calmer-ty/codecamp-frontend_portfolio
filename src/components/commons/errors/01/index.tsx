import styled from "@emotion/styled";

interface IErrorProps {
  text?: string;
}

const Error = styled.div`
  height: 20px;
  margin-top: 4px;
  padding: 0 12px;
  font-size: 16px;
  color: red;
`;

export default function Error01(props: IErrorProps): JSX.Element {
  return <Error>{props.text}</Error>;
}
