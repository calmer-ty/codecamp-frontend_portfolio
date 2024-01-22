import type { DocumentData } from "firebase/firestore";
import * as S from "./BoardList.styles";
// import { getDate } from "../../../../commons/libraries/utils";

import type { BoardListUIProps } from "./BoardList.types";

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
          {props.docs?.map((el: DocumentData, index: number) => (
            <S.List key={el.id}>
              <S.ListItem>{index + 1}</S.ListItem>
              <S.ListItemTitle
                id={el.id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.data().title}
              </S.ListItemTitle>
              <S.ListItem>{el.data().writer}</S.ListItem>
              <S.ListItem>추후 제공</S.ListItem>
            </S.List>
          ))}
        </S.Table>
        <S.MoveBtn onClick={props.onClickMoveToBoardNew}>
          <S.MoveBtnIcon src="/images/board/list/ic_create.png" />
          게시물 등록하기
        </S.MoveBtn>
      </S.Container>
    </S.Wrapper>
  );
}
