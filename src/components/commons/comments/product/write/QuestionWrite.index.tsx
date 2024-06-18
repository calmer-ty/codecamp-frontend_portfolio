import { useForm } from "react-hook-form";
import { useProductQuestion } from "../../../hooks/customs/product/useProductQuestion";

import Textarea01 from "../../../element/textarea/01";
import TitleComment from "../../../element/title/comment";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductQuestion } from "../../../../../commons/libraries/validation";
import type { IQuestionWriteProps, IFormData } from "./QuestionWrite.types";
import * as S from "./QuestionWrite.styles";

export default function QuestionWrite(props: IQuestionWriteProps): JSX.Element {
  const { register, handleSubmit, watch, reset } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schemaProductQuestion),
  });

  const { onClickCreate, onClickUpdate } = useProductQuestion({
    useditemQuestionId: props.el?._id,
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
    <S.QuestionWrite isEdit={props.isEdit}>
      {!props.isEdit && <TitleComment text="문의" />}
      <S.Form onSubmit={handleSubmit(props.isEdit ? handleUpdate : handleCreate)}>
        <Textarea01
          isEdit={props.isEdit}
          defaultValue={props.el?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          register={register("contents")}
          word={watch().contents?.length ?? 0}
          onToggleEdit={props.onToggleEdit}
          btnName={props.isEdit ? "수정하기" : "등록하기"}
        />
      </S.Form>
    </S.QuestionWrite>
  );
}
