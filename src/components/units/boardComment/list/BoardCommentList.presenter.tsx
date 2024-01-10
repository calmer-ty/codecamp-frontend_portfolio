import type { BoardCommentListUIProps } from "./BoardCommentList.types";
import { getDate } from "../../../../commons/libraries/utils";
// Styles
import * as S from "./BoardCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(
  props: BoardCommentListUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <S.List key={el._id}>
              <S.RowWrap>
                <S.Avatar src="/images/boardComment/list/ic_profile.png" />
                <S.ColWrap>
                  <S.Title>
                    <S.Writer>{el.writer}</S.Writer>
                    <S.Like value={el.rating} disabled={true} />
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
        </InfiniteScroll>
      </S.Container>

      {props.isOpen && (
        <S.CommentDeleteModal
          title="댓글을 삭제하시겠습니까?"
          open={props.isOpen}
          onOk={props.onClickDelete}
          onCancel={props.onClickCloseDeleteModal}
        >
          비밀번호 입력: {""}
          <input type="password" onChange={props.onChangeDeletePassword} />
        </S.CommentDeleteModal>
      )}
    </S.Wrapper>
  );
}
