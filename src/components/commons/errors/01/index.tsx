import styled from "@emotion/styled";

interface IErrorProps {
  text?: any;
}

const Error = styled.div`
  height: 21px;
  margin-top: 7px;
  font-size: 16px;
  color: red;
`;

export default function Error01(props: IErrorProps): JSX.Element {
  return <Error>{props.text}</Error>;
}
