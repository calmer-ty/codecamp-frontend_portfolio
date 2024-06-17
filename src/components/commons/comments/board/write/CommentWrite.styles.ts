import styled from "@emotion/styled";
import { Rate } from "antd";
import type { ICommentWriteProps } from "./CommentWrite.types";

export const CommentWrite = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  border-top: ${(props: ICommentWriteProps) => (props.isEdit ? "1px solid #bdbdbd" : "")};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  column-gap: 24px;
`;
// Info
export const UserInfoInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
`;
export const RateScore = styled(Rate)``;
