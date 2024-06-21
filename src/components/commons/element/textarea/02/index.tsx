import type { ITextareaProps } from "./types";
import * as S from "./styles";
import { useState } from "react";

export default function Textarea02(props: ITextareaProps): JSX.Element {
  const [word, setWord] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setWord(event.target.value);
  };
  console.log(word.length);
  return (
    <S.ContentsWrap>
      <S.Contents onChange={handleChange} maxLength={100} placeholder={props.placeholder} defaultValue={props.defaultValue} />
      <S.ContentsBottom>
        <S.ContentsLength>
          {word.length}/{100}
        </S.ContentsLength>
        <S.BtnWrap>
          <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.BtnWrap>
      </S.ContentsBottom>
    </S.ContentsWrap>
  );
}
