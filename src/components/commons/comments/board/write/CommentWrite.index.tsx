import { useForm } from "react-hook-form";
//
import * as S from "./CommentWrite.styles";
// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBoardComment } from "../../../../../commons/libraries/validation";
// Custom Hooks
import { useBoardComment } from "../../../hooks/customs/useBoardComment";
// Component
import Textarea01 from "../../../element/textarea/01";
import TitleComment from "../../../element/title/comment";
import InputComment from "../../../element/inputs/comment";
// Type
import type { ICommentWriteProps, IFormData } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const { register, handleSubmit, watch } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schemaBoardComment),
  });

  const { onClickCreate, onClickUpdate, rating, setRating } = useBoardComment({
    rating: props.el?.rating,
    boardCommentId: props.el?._id,
    onToggleEdit: props.onToggleEdit,
  });

  console.log(props);

  return (
    <S.CommentWrite isEdit={props.isEdit}>
      <TitleComment text="댓글" />
      <S.Form onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickCreate)}>
        <S.InputWrap>
          <InputComment placeholder="작성자" defaultValue={props.el?.writer ?? ""} register={register("writer")} />
          <InputComment type="password" placeholder="비밀번호" defaultValue={""} register={register("password")} />
          <S.RateScore onChange={setRating} value={rating} />
        </S.InputWrap>
        <Textarea01
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          isEdit={props.isEdit}
          length={100}
          register={register("contents")}
          defaultValue={props.el?.contents ?? ""}
          word={typeof watch().contents === "string" ? watch().contents.length : 0}
          onToggleEdit={props.onToggleEdit}
          btnName={props.isEdit ? "수정하기" : "등록하기"}
        />
      </S.Form>
    </S.CommentWrite>
  );
}
