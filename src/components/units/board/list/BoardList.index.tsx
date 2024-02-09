import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

// Custom hooks
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import { useKeyword } from "../../../commons/hooks/customs/useKeryword";

// Component
import Pagination01 from "../../../commons/paginations/01/Pagination01.container";
import Searchbar01 from "../../../commons/searchbars/01/SearchBar01.index";

import { getDate } from "../../../../commons/libraries/utils";

const SECRET_STRING = "!@#$";

export default function BoardListUI(): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();
  const { onClickMoveToPage } = useMoveToPage();

  // 검색 기능
  const { keyword, onChangeKeyword } = useKeyword();

  return (
    <S.Wrapper>
      <S.Container>
        <Searchbar01
          refetch={refetch}
          refetchBoardsCount={refetchBoardsCount}
          onChangeKeyword={onChangeKeyword}
        />
        <S.Table>
          <S.Header>
            <S.HeaderItem>번호</S.HeaderItem>
            <S.HeaderItemTitle>제목</S.HeaderItemTitle>
            <S.HeaderItem>작성자</S.HeaderItem>
            <S.HeaderItem>날짜</S.HeaderItem>
          </S.Header>
          {data?.fetchBoards.map((el) => (
            <S.List key={el._id}>
              <S.ListItem>{String(el._id).slice(-4).toUpperCase()}</S.ListItem>
              <S.ListItemTitle onClick={onClickMoveToPage(`/boards/${el._id}`)}>
                {el.title
                  .replaceAll(
                    keyword,
                    `${SECRET_STRING}${keyword}${SECRET_STRING}`
                  )
                  .split(SECRET_STRING)
                  .map((el) => (
                    <S.KeywordToken key={uuidv4()} isMatched={keyword === el}>
                      {el}
                    </S.KeywordToken>
                  ))}
              </S.ListItemTitle>
              <S.ListItem>{el.writer}</S.ListItem>
              <S.ListItem>{getDate(el.createdAt)}</S.ListItem>
            </S.List>
          ))}
        </S.Table>
        <Pagination01
          count={dataBoardsCount?.fetchBoardsCount}
          refetch={refetch}
        />
        <S.MoveBtn onClick={onClickMoveToPage("/boards/new")}>
          <S.MoveBtnIcon src="/images/board/list/ic_create.png" />
          게시물 등록하기
        </S.MoveBtn>
      </S.Container>
    </S.Wrapper>
  );
}
