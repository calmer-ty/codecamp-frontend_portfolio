import type { BoardCommentListUIProps } from "./BoardCommentList.types";
// STYLES
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { Modal, Rate } from "antd";

export default function BoardCommentListUI(
  props: BoardCommentListUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        {props.data?.fetchBoardComments.map((el) => (
          <S.List key={el._id}>
            <S.RowWrap>
              <S.Avatar src="/images/ic_profile-40px.png" />
              <S.ColWrap>
                <S.Title>
                  <S.Writer>{el.writer}</S.Writer>
                  <Rate value={el.rating} disabled={true} />
                </S.Title>
                <S.Contents>{el.contents}</S.Contents>
              </S.ColWrap>
            </S.RowWrap>

            <S.CreateDate>{getDate(el?.createdAt)}</S.CreateDate>

            <S.OptBtnWrap>
              <S.EditBtn />
              <S.DelBtn id={el._id} onClick={props.onClickOpenDeleteModal} />
            </S.OptBtnWrap>
          </S.List>
        ))}
      </S.Container>

      {props.isOpenDeleteModal && (
        <Modal
          title="댓글을 삭제하시겠습니까?"
          open={props.isOpenDeleteModal}
          onOk={props.onClickDelete}
          onCancel={props.onClickCloseDeleteModal}
        >
          비밀번호 입력: {""}
          <input type="password" onChange={props.onChangeDeletePassword} />
        </Modal>
      )}
    </S.Wrapper>
  );
}
