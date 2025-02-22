import { useToggle } from "../../../hooks/customs/useToggle";
import { useProductQuestion } from "../../../hooks/customs/product/useProductQuestion";
// import { useFetchProductQuestionAnswers } from "../../../hooks/queries/product/useFetchProductQuestionAnswers";
import { getDate } from "../../../../../commons/libraries/utils";

import UserIcon01 from "../../../element/icon/user/01";
import EditBtn01 from "../../../element/buttons/edit/01";
import DeleteBtn01 from "../../../element/buttons/delete/01";
import QuestionWrite from "../write/QuestionWrite.index";
import QuestionAnswer from "../answer/QuestionAnswer.index";
// import QuestionAnswerWrite from "../answer/writer/QuestionAnswerWrite.index";
// import QuestionAnswerList from "../answer/list/QuestionAnswerList.index";

import type { IQuestionListProps } from "./QuestionList.types";
import * as S from "./QuestionList.styles";

export default function QuestionList(props: IQuestionListProps): JSX.Element {
  const [isEdit, onToggleEdit] = useToggle(false);

  const { onClickDelete } = useProductQuestion({
    useditemQuestionId: props.el._id,
  });

  return (
    <>
      {isEdit ? (
        <QuestionWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />
      ) : (
        <S.ListItem key={props.el._id}>
          <S.ItemWrap>
            <UserIcon01 />
            <S.CommentContents>
              <S.Writer>{props.el.user.name}</S.Writer>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreateDate>{getDate(props.el.createdAt)}</S.CreateDate>
            </S.CommentContents>
          </S.ItemWrap>
          <S.BtnWrap>
            <EditBtn01 onClick={onToggleEdit} />
            <DeleteBtn01 onClick={onClickDelete} />
          </S.BtnWrap>
          <QuestionAnswer el={props.el} />
        </S.ListItem>
      )}
    </>
  );
}
