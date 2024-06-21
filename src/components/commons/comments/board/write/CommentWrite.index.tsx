import { useForm } from "react-hook-form";
import { useBoardComment } from "../../../hooks/customs/board/useBoardComment";

import Textarea01 from "../../../element/textarea/01";
import TitleComment01 from "../../../element/title/comment/01";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBoardComment } from "../../../../../commons/libraries/validation";
import type { ICommentWriteProps, IFormData } from "./CommentWrite.types";
import * as S from "./CommentWrite.styles";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const { register, handleSubmit, watch, reset } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schemaBoardComment),
  });

  const { onClickCreate, onClickUpdate, rating, setRating } = useBoardComment({
    rating: props.el?.rating,
    boardCommentId: props.el?._id,
    onToggleEdit: props.onToggleEdit,
  });

  const handleCreate = async (data: IFormData): Promise<void> => {
    await onClickCreate(data);
    reset(); // 폼 필드를 초기화
  };

  const handleUpdate = async (data: IFormData): Promise<void> => {
    await onClickUpdate(data);
    reset(); // 폼 필드를 초기화
  };

  return (
    <S.CommentWrite isEdit={props.isEdit}>
      {!props.isEdit && <TitleComment01 text="댓글" />}
      <S.Form onSubmit={handleSubmit(props.isEdit ? handleUpdate : handleCreate)}>
        <S.InputWrap>
          <S.UserInfoInput readOnly={props.isEdit} placeholder="작성자" defaultValue={props.el?.writer ?? ""} {...register("writer")} />
          <S.UserInfoInput type="password" placeholder="비밀번호(4자 이상)" defaultValue={""} {...register("password")} />
          <S.RateScore onChange={setRating} value={rating} />
        </S.InputWrap>
        <Textarea01
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          isEdit={props.isEdit}
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
