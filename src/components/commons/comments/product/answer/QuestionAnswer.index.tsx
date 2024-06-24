import { useToggle } from "../../../hooks/customs/useToggle";
import { useScrollQuestionAnswer } from "../../../hooks/customs/product/useScrollQuestionAnswer";

import QuestionAnswerWrite from "./writer/QuestionAnswerWrite.index";
import QuestionAnswerList from "./list/QuestionAnswerList.index";
import InfiniteScroll from "react-infinite-scroller";

import type { IQuestionAnswerProps } from "./QuestionAnswer.types";
import * as S from "./QuestionAnswer.styles";

export default function QuestionAnswer(props: IQuestionAnswerProps): JSX.Element {
  const [isOpen, onToggleOpen] = useToggle(false);
  const { data, onLoadMore } = useScrollQuestionAnswer(props.el._id);

  return (
    <>
      <S.AnswerToggleButton onClick={onToggleOpen}>{isOpen ? "답글 닫기" : "답글"}</S.AnswerToggleButton>
      {isOpen ? (
        <>
          <QuestionAnswerWrite isEdit={false} useditemQuestionId={props.el._id} />
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {data?.fetchUseditemQuestionAnswers.map((el, _) => <QuestionAnswerList key={el._id} useditemQuestionId={props.el._id} el={el} />)}
          </InfiniteScroll>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
