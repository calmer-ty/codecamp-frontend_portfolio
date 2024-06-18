import { useToggle } from "../../../hooks/customs/useToggle";
import { useFetchProductQuestionAnswers } from "../../../hooks/queries/product/useFetchProductQuestionAnswers";

import QuestionAnswerWrite from "./writer/QuestionAnswerWrite.index";
import QuestionAnswerList from "./list/QuestionAnswerList.index";

import type { IQuestionAnswerProps } from "./QuestionAnswer.types";
import * as S from "./QuestionAnswer.styles";

export default function QuestionAnswer(props: IQuestionAnswerProps): JSX.Element {
  console.log(props);
  const [isOpen, onToggleOpen] = useToggle(false);

  const { data } = useFetchProductQuestionAnswers(props.el._id);
  return (
    <>
      <S.AnswerToggleButton onClick={onToggleOpen}>
        답글
        <S.AnswerCount>({data?.fetchUseditemQuestionAnswers.length})</S.AnswerCount>
      </S.AnswerToggleButton>
      {isOpen ? (
        <>
          <QuestionAnswerWrite id={props.el._id} />
          {/* 대댓글 */}
          {data?.fetchUseditemQuestionAnswers.map((el, _) => <QuestionAnswerList key={el._id} useditemQuestionId={props.el._id} el={el} />)}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
