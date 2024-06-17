import { useBoardComment } from "../../../hooks/customs/board/useBoardComment";
import { useToggle } from "../../../hooks/customs/useToggle";
import { getDate } from "../../../../../commons/libraries/utils";
import CommentWrite from "../write/CommentWrite.index";

import EditBtn01 from "../../../element/buttons/edit/01";
import DeleteBtn01 from "../../../element/buttons/delete/01";
import UserIcon01 from "../../../element/icon/user/01";

import type { IBoardComment } from "../../../../../commons/types/generated/types";
import * as S from "./CommentList.styles";

interface CommentItemProps {
  el: IBoardComment;
}

export default function CommentList(props: CommentItemProps): JSX.Element {
  const [isOpen, onToggleModal] = useToggle(false);
  const [isEdit, onToggleEdit] = useToggle(false);

  const { onClickDelete, onChangeDeletePassword } = useBoardComment({
    boardCommentId: props.el._id,
  });

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
          <S.ItemWrap>
            <UserIcon01 />
            <S.CommentContents>
              <S.Writer>{props.el.writer}</S.Writer>
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
        <CommentWrite isEdit={true} onToggleEdit={onToggleEdit} el={props.el} />
      )}
    </>
  );
}
