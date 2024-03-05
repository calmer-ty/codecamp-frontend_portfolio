import * as S from "./QuestionList.styles";

// Custom Hooks
import { useToggle } from "../../../hooks/customs/useToggle";
import { useProductQuestion } from "../../../hooks/customs/useProductQuestion";

import QuestionWrite from "../write/QuestionWrite.index";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { getDate } from "../../../../../commons/libraries/utils";
import type { IUseditemQuestion } from "../../../../../commons/types/generated/types";

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
          <S.FlexRow>
            <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "16px" }} />
            <S.FlexColumn>
              <S.ItemTop>
                <S.Writer>{props.el.user.name}</S.Writer>
              </S.ItemTop>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreateDate>{getDate(props.el.createdAt)}</S.CreateDate>
            </S.FlexColumn>
          </S.FlexRow>
          <S.BtnWrap>
            <S.EditBtn onClick={onToggleEdit} />
            <S.DeleteBtn onClick={onClickDelete} />
          </S.BtnWrap>
        </S.ListItem>
      ) : (
        <QuestionWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />
      )}
    </>
  );
}
