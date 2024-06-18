import type { IQuestionAnswerListProps } from "./QuestionAnswerList.types";
import { useToggle } from "../../../../hooks/customs/useToggle";
// import QuestionAnswerWrite from "../writer/QuestionAnswerWrite.index";

import UserIcon01 from "../../../../element/icon/user/01";
import EditButton01 from "../../../../element/buttons/edit/01";
import DeleteBtn01 from "../../../../element/buttons/delete/01";
import * as S from "./QuestionAnswerList.styles";
import { useProductQuestionAnswer } from "../../../../hooks/customs/product/useProductQuestionAnswer";

export default function QuestionAnswerList(props: IQuestionAnswerListProps): JSX.Element {
  console.log(props);
  const [isEdit, onToggleEdit] = useToggle(false);

  const { onClickDelete } = useProductQuestionAnswer({
    useditemQuestionId: props.useditemQuestionId,
    useditemQuestionAnswerId: props.el._id,
  });
  return (
    <>
      {isEdit ? (
        // <QuestionAnswerWrite isEdit={true} onToggleEdit={onToggleEdit} />
        <></>
      ) : (
        <S.ListItem key={props.el._id}>
          <S.ItemWrap>
            <UserIcon01 />
            <S.CommentContents>
              <S.Writer>{props.el.user.name}</S.Writer>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.CommentContents>
          </S.ItemWrap>
          <S.BtnWrap>
            <EditButton01 onClick={onToggleEdit} />
            <DeleteBtn01 onClick={onClickDelete} />
          </S.BtnWrap>
        </S.ListItem>
      )}
    </>
  );
}
