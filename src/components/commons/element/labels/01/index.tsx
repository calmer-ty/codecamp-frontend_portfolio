import styled from "@emotion/styled";

interface ILabelProps {
  text: string;
}

const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export default function Label01(props: ILabelProps): JSX.Element {
  return <Label>{props.text}</Label>;
}
