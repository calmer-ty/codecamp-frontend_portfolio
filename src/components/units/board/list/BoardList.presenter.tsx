import * as S from "./BoardList.styles";
// import { getDate } from "../../../../commons/libraries/utils";

import type { BoardListUIProps } from "./BoardList.types";
import Pagination from "../../../commons/pagination/Pagination.container";

export default function BoardListUI(props: BoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Table>
          <S.Header>
            <S.HeaderItem>번호</S.HeaderItem>
            <S.HeaderItemTitle>제목</S.HeaderItemTitle>
            <S.HeaderItem>작성자</S.HeaderItem>
            <S.HeaderItem>날짜</S.HeaderItem>
          </S.Header>
          {props.data?.fetchBoards.map((el) => (
            <S.List key={el._id}>
              <S.ListItem>{String(el._id).slice(-4).toUpperCase()}</S.ListItem>
              <S.ListItemTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.title}
              </S.ListItemTitle>
              <S.ListItem>{el.writer}</S.ListItem>
              {/* <S.ListItem>{getDate(el.createdAt)}</S.ListItem> */}
            </S.List>
          ))}
        </S.Table>
        {/* Pagination */}
        <Pagination refetch={props.refetch} count={props.count} />
        <S.MoveBtn onClick={props.onClickMoveToBoardNew}>
          <S.MoveBtnIcon src="/images/board/list/ic_create.png" />
          게시물 등록하기
        </S.MoveBtn>
      </S.Container>
    </S.Wrapper>
  );
}
