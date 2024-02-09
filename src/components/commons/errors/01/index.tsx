import styled from "@emotion/styled";

interface IErrorProps {
  text?: string;
}

const Error = styled.div`
  height: 20px;
  margin-top: 5px;
  padding: 0 10px;
  font-size: 16px;
  color: red;
`;

export default function Error01(props: IErrorProps): JSX.Element {
  return <Error>{props.text}</Error>;
}
