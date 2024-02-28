import { useState } from "react";
import { useForm } from "react-hook-form";
//
import * as S from "./CommentWrite.styles";
// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBoardComment } from "../../../../../commons/libraries/validation";
// Custom Hooks
import { useBoardComment } from "../../../hooks/customs/useBoardComment";
import InputCustom from "../../../element/inputs/custom";
// Type
import type { ICommentWriteProps, IFormData } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  console.log(props);
  const [rating, setRating] = useState(props.el?.rating);

  const { register, handleSubmit, watch } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schemaBoardComment),
  });

  const { onClickCreate, onClickUpdate } = useBoardComment({
    rating,
    setRating,
    boardCommentId: props.el?._id,
    onToggleEdit: props.onToggleEdit,
  });

  return (
    <S.CommentWrite>
      {props.isEdit === false && (
        <S.Title>
          <S.TitleImg src="/images/comment/write/ic_logo.png" />
          댓글
        </S.Title>
      )}
      <S.Form onSubmit={handleSubmit(props.isEdit === true ? onClickUpdate : onClickCreate)}>
        <S.InputWrap>
          <InputCustom
            width={180}
            placeholder="작성자"
            defaultValue={props.el?.writer ?? ""}
            register={register("writer")}
          />
          <InputCustom
            type="password"
            width={180}
            placeholder="비밀번호"
            defaultValue={""}
            register={register("password")}
          />
          <S.RateScore onChange={setRating} value={rating} />
        </S.InputWrap>
        <S.ContentsWrap>
          <S.Contents
            id="contents"
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.isEdit === true ? props.el?.contents : watch().contents}
            {...register("contents")}
          />
          <S.ContentsBottom>
            <S.ContentsLength>
              {typeof watch().contents === "string" ? watch().contents.length : 0}
              /100
            </S.ContentsLength>
            <S.BtnWrap>
              {props.isEdit === true ? <S.CancelBtn onClick={props.onToggleEdit}>취소</S.CancelBtn> : ""}
              <S.SubmitBtn>{props.isEdit === true ? "수정하기" : "등록하기"}</S.SubmitBtn>
            </S.BtnWrap>
          </S.ContentsBottom>
        </S.ContentsWrap>
      </S.Form>
    </S.CommentWrite>
  );
}
