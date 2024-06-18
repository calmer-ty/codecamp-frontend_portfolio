import { useForm } from "react-hook-form";
import Textarea01 from "../../../../element/textarea/01";

import { useProductQuestionAnswer } from "../../../../hooks/customs/product/useProductQuestionAnswer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductQuestion } from "../../../../../../commons/libraries/validation";

import type { IFormData, IQuestionAnswerWriteProps } from "./QuestionAnswerWrite.types";
import * as S from "./QuestionAnswerWrite.styles";

export default function QuestionAnswerWrite(props: IQuestionAnswerWriteProps): JSX.Element {
  const { register, handleSubmit, watch, reset } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schemaProductQuestion),
  });
  const { onClickCreate } = useProductQuestionAnswer({
    useditemQuestionId: props.el?._id,
  });
  console.log(props.el);

  const handleCreate = async (data: IFormData): Promise<void> => {
    await onClickCreate(data);
    reset(); // 폼 필드를 초기화
  };

  // const handleUpdate = async (data: IFormData): Promise<void> => {
  //   await onClickUpdate(data);
  //   reset(); // 폼 필드를 초기화
  // };

  return (
    <S.QuestionAnswerWrite onSubmit={handleSubmit(handleCreate)}>
      <Textarea01
        isEdit={props.isEdit ?? false}
        defaultValue={props.el?.contents}
        placeholder="답글을 등록해주세요."
        register={register("contents")}
        word={watch().contents?.length ?? 0}
        onToggleEdit={props.onToggleEdit}
        btnName={props.isEdit === true ? "답글수정" : "답글등록"}
      />
    </S.QuestionAnswerWrite>
  );
}
