import * as S from "./CommentList.styles";
import CommentWrite from "../write/CommentWrite.index";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { getDate } from "../../../../../commons/libraries/utils";

// Custom Hooks
import { useBoardComment } from "../../../hooks/customs/useBoardComment";
import { useToggle } from "../../../hooks/customs/useToggle";

import type { IBoardComment } from "../../../../../commons/types/generated/types";

interface CommentItemProps {
  el: IBoardComment;
}

export default function CommentList(props: CommentItemProps): JSX.Element {
  const [isOpen, onToggleModal] = useToggle(false);
  const [isEdit, onToggleEdit] = useToggle(false);

  const { onClickDelete, onChangeDeletePassword } = useBoardComment({
    boardCommentId: props.el._id,
  });

  console.log(props);

  return (
    <>
      {isOpen && (
        <S.CommentDeleteModal visible={true} onOk={onClickDelete} onCancel={onToggleModal}>
          <span>비밀번호 입력: </span>
          <input type="password" onChange={onChangeDeletePassword} />
        </S.CommentDeleteModal>
      )}

      {!isEdit ? (
        <S.ListItem key={props.el._id}>
          <S.FlexRow>
            <Avatar size={40} icon={<UserOutlined />} style={{ marginRight: "16px" }} />
            <S.FlexColumn>
              <S.ItemTop>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.RateScore value={props.el.rating} disabled={true} />
              </S.ItemTop>
              <S.Contents>{props.el.contents}</S.Contents>
              <S.CreateDate>{getDate(props.el.createdAt)}</S.CreateDate>
            </S.FlexColumn>
          </S.FlexRow>
          <S.BtnWrap>
            <S.EditBtn onClick={onToggleEdit} />
            <S.DeleteBtn onClick={onToggleModal} />
          </S.BtnWrap>
        </S.ListItem>
      ) : (
        <CommentWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />
      )}
    </>
  );
}
