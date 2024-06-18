import { useProductQuestionAnswer } from "../../../../hooks/customs/product/useProductQuestionAnswer";
import { useToggle } from "../../../../hooks/customs/useToggle";

import UserIcon01 from "../../../../element/icon/user/01";
import EditButton01 from "../../../../element/buttons/edit/01";
import DeleteBtn01 from "../../../../element/buttons/delete/01";
import QuestionAnswerWrite from "../writer/QuestionAnswerWrite.index";

import type { IQuestionAnswerListProps } from "./QuestionAnswerList.types";
import * as S from "./QuestionAnswerList.styles";

export default function QuestionAnswerList(props: IQuestionAnswerListProps): JSX.Element {
  const [isEdit, onToggleEdit] = useToggle(false);

  const { onClickDelete } = useProductQuestionAnswer({
    // 리패치쿼리를 해야하기 때문에, 댓글 아이디를 가져옴
    // 일반 댓글은 커스텀훅에서 라우터로 쿼리를 불러올 수 있지만 대댓글은 반복된 댓글 중에서 해당되는 댓글을 가져와야하기 때문에
    //  props로 가져온 아이디를 사용
    useditemQuestionId: props.useditemQuestionId,
    useditemQuestionAnswerId: props.el._id,
  });

  console.log(props);

  return (
    <>
      {isEdit ? (
        <QuestionAnswerWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />
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
