import { useToggle } from "../../../hooks/customs/useToggle";
import { useProductQuestion } from "../../../hooks/customs/product/useProductQuestion";
import { getDate } from "../../../../../commons/libraries/utils";

import QuestionWrite from "../write/QuestionWrite.index";

import EditBtn01 from "../../../element/buttons/edit/01";
import DeleteBtn01 from "../../../element/buttons/delete/01";

// Type
import type { IUseditemQuestion } from "../../../../../commons/types/generated/types";
import * as S from "./QuestionList.styles";
import UserIcon01 from "../../../element/icon/user/01";

interface IQuestionListProps {
  el: IUseditemQuestion;
}

export default function QuestionList(props: IQuestionListProps): JSX.Element {
  const [isEdit, onToggleEdit] = useToggle(false);

  const { onClickDelete } = useProductQuestion({
    useditemQuestionId: props.el._id,
  });

  return (
    <>
      {!isEdit ? (
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
        </S.ListItem>
      ) : (
        <QuestionWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />
      )}
    </>
  );
}
