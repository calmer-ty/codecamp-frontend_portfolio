import { useState } from "react";
import { useForm } from "react-hook-form";
//
import * as S from "./CommentWrite.styles";
// Yup
import { schemaBoardComment } from "../../../../../commons/libraries/validation";
import InputCustom from "../../../element/inputs/custom";
// Custom Hooks
import { useBoardComment } from "../../../hooks/customs/useBoardComment";
import { yupResolver } from "@hookform/resolvers/yup";
// Type
import type { ICommentWriteProps, IFormData } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const [rating, setRating] = useState(props.el?.rating);

  const { register, handleSubmit, watch } = useForm<IFormData>({
    resolver: yupResolver(schemaBoardComment),
  });
  const { onClickSubmit, onClickUpdate } = useBoardComment({
    rating,
    setRating,
    boardCommentId: String(props.el?._id),
  });

  const onClickUpdateCancel = (): void => {
    props.onToggleEdit?.();
  };

  console.log(props.el?.writer);

  return (
    <S.Wrapper>
      <S.Container>
        {props.isEdit === false && (
          <S.Title>
            <S.TitleImg src="/images/comment/write/ic_logo.png" />
            댓글
          </S.Title>
        )}
        <S.Form onSubmit={handleSubmit(props.isEdit === true ? onClickUpdate : onClickSubmit)}>
          <S.InputWrap>
            <InputCustom
              width={180}
              placeholder="작성자"
              value={typeof props.el?.writer === "string" ? props.el?.writer : watch().writer}
              register={register("writer")}
            />
            <InputCustom
              type="password"
              width={180}
              placeholder="비밀번호"
              // value={watch().password ?? ""}

              register={register("password")}
            />
            <S.RateScore onChange={setRating} value={rating} />
          </S.InputWrap>
          <S.ContentsWrap>
            <S.Contents
              id="contents"
              maxLength={100}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              value={watch().contents ?? ""}
              {...register("contents")}
            />
            <S.ContentsBottom>
              <S.ContentsLength>
                {typeof watch().contents === "string" ? watch().contents.length : 0}
                /100
              </S.ContentsLength>
              <S.BtnWrap>
                {props.isEdit === true ? <S.CancelBtn onClick={onClickUpdateCancel}>취소</S.CancelBtn> : ""}
                <S.SubmitBtn>{props.isEdit === true ? "수정하기" : "등록하기"}</S.SubmitBtn>
              </S.BtnWrap>
            </S.ContentsBottom>
          </S.ContentsWrap>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
}
