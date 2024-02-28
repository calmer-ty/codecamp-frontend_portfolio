import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface ITextareaProps {
  length: number;
  placeholder: string;
  defaultValue?: string | number;
  register: UseFormRegisterReturn;

  word: number;
  isEdit?: boolean;
  onToggleEdit?: () => void;

  btnName: string;
}
// Contents
const ContentsWrap = styled.article`
  position: relative;
  width: 1200px;
  border: 1px solid #bdbdbd;
`;
const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: 0;
`;
const ContentsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f2f2f2;
`;
const ContentsLength = styled.span`
  margin: 0 20px;
  color: #bdbdbd;
`;
const BtnWrap = styled.div`
  display: flex;
`;
const SubmitBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: #000;
  color: #fff;
`;
const CancelBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: #f00;
  color: #fff;
`;

export default function Textarea01(props: ITextareaProps): JSX.Element {
  return (
    <ContentsWrap>
      <Contents
        maxLength={props.length}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        {...props.register}
      />
      <ContentsBottom>
        <ContentsLength>
          {props.word}/{props.length}
        </ContentsLength>
        <BtnWrap>
          {props.isEdit === true ? <CancelBtn onClick={props.onToggleEdit}>취소</CancelBtn> : ""}
          <SubmitBtn>{props.btnName}</SubmitBtn>
        </BtnWrap>
      </ContentsBottom>
    </ContentsWrap>
  );
}
