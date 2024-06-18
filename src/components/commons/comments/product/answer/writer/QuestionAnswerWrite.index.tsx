import { useForm } from "react-hook-form";
import Textarea01 from "../../../../element/textarea/01";

import { useProductQuestionAnswer } from "../../../../hooks/customs/product/useProductQuestionAnswer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProductQuestion } from "../../../../../../commons/libraries/validation";

import type { IFormData, IQuestionAnswerWriteProps } from "./QuestionAnswerWrite.types";
import * as S from "./QuestionAnswerWrite.styles";

export default function QuestionAnswerWrite(props: IQuestionAnswerWriteProps): JSX.Element {
  const { register, handleSubmit, watch } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(schemaProductQuestion),
  });
  const { onClickCreate } = useProductQuestionAnswer({
    useditemQuestionId: props.el._id,
  });

  return (
    <>
      <S.QuestionAnswerWrite onSubmit={handleSubmit(onClickCreate)}>
        <Textarea01 placeholder="답글을 등록해주세요." word={watch().contents?.length ?? 0} register={register("contents")} btnName="답글등록" />
      </S.QuestionAnswerWrite>
    </>
  );
}
