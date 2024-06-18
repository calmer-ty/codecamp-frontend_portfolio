import type { ITextareaProps } from "./types";
import * as S from "./styles";

export default function Textarea01(props: ITextareaProps): JSX.Element {
  return (
    <S.ContentsWrap>
      <S.Contents maxLength={100} placeholder={props.placeholder} defaultValue={props.defaultValue} {...props.register} />
      <S.ContentsBottom>
        <S.ContentsLength>
          {props.word}/{100}
        </S.ContentsLength>
        <S.BtnWrap>
          {props.isEdit ? <S.CancelBtn onClick={props.onToggleEdit}>취소</S.CancelBtn> : ""}
          <S.SubmitBtn>{props.btnName}</S.SubmitBtn>
        </S.BtnWrap>
      </S.ContentsBottom>
    </S.ContentsWrap>
  );
}
