import type { ITextareaProps } from "./types";
import * as S from "./styles";

export default function Textarea01(props: ITextareaProps): JSX.Element {
  return (
    <S.ContentsWrap>
      <S.Contents maxLength={props.length} placeholder={props.placeholder} defaultValue={props.defaultValue} {...props.register} />
      <S.ContentsBottom>
        <S.ContentsLength>
          {props.word}/{props.length}
        </S.ContentsLength>
        <S.BtnWrap>
          {props.isEdit === true ? <S.CancelBtn onClick={props.onToggleEdit}>취소</S.CancelBtn> : ""}
          <S.SubmitBtn>{props.btnName}</S.SubmitBtn>
        </S.BtnWrap>
      </S.ContentsBottom>
    </S.ContentsWrap>
  );
}
