import styled from "@emotion/styled";

interface ITextareaProps {
  text: string;
}

export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 500;
`;
export const TitleImg = styled.img`
  margin-right: 12px;
`;

const h2Styles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "40px",
  fontSize: "18px",
  fontWeight: "500",
};
const imgStyles = {
  marginRight: "12px",
};

export default function TitleComment(props: ITextareaProps): JSX.Element {
  return (
    <h2 style={h2Styles}>
      <img style={imgStyles} src="/images/comment/write/ic_logo.png" />
      {props.text}
    </h2>
  );
}
