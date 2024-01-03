// TYPES
import type { BoardCommentListUIProps } from "./BoardCommentList.types";
// STYLES
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { Rate } from "antd";

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
              <S.DeleteBtn id={el._id} onClick={props.onClickDelete} />
            </S.OptBtnWrap>
          </S.List>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
