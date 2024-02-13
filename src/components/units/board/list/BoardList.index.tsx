import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";

import Button02 from "../../../commons/element/buttons/02";
import Pagination01 from "../../../commons/paginations/01/Pagination01.index";
import Searchbar01 from "../../../commons/searchbars/01/Searchbar01.index";
import { v4 as uuidv4 } from "uuid";

// Custom Hooks
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
import { usePagination } from "../../../commons/hooks/customs/usePagination";
import { useFetchBoards } from "../../../commons/hooks/queries/useFetchBoards";
import { useFetchBoardsCount } from "../../../commons/hooks/queries/useFetchBoardCount";

const SECRET_STRING = "!@#$";

export default function BoardList(): JSX.Element {
  const { data, refetch } = useFetchBoards();
  const { data: dataBoardsCount, refetch: refetchCount } =
    useFetchBoardsCount();
  const { onClickMoveToPage } = useMoveToPage();

  const paginationArgs = usePagination({
    refetch,
    count: dataBoardsCount?.fetchBoardsCount,
  });

  // 검색 기능
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
    refetchCount,
  });

  return (
    <S.Wrapper>
      <S.Container>
        <Searchbar01 onChangeSearch={onChangeSearch} />
        <S.Table>
          <S.HeaderWrap>
            <S.ListItem style={{ width: "15%" }}>번호</S.ListItem>
            <S.ListItem style={{ width: "50%" }}>제목</S.ListItem>
            <S.ListItem style={{ width: "20%" }}>작성자</S.ListItem>
            <S.ListItem style={{ width: "15%" }}>날짜</S.ListItem>
          </S.HeaderWrap>
          {data?.fetchBoards.map((el) => (
            <S.List key={el._id}>
              <S.ListItem style={{ width: "15%" }}>
                {String(el._id).slice(-4).toUpperCase()}
              </S.ListItem>
              <S.ListItemTitle
                style={{ width: "50%" }}
                onClick={onClickMoveToPage(`/boards/${el._id}`)}
              >
                {el.title
                  .replaceAll(
                    keyword,
                    `${SECRET_STRING}${keyword}${SECRET_STRING}`
                  )
                  // 입력된 키워드 값의 문자열을 시크릿코드를 붙여 변경해주고
                  .split(SECRET_STRING)
                  // 시크릿 코드 기준으로 잘라 배열로 변환한다.
                  .map((el) => (
                    <S.KeywordToken key={uuidv4()} isMatched={keyword === el}>
                      {el}
                    </S.KeywordToken>
                  ))}
              </S.ListItemTitle>
              <S.ListItem style={{ width: "20%" }}>{el.writer}</S.ListItem>
              <S.ListItem style={{ width: "15%" }}>
                {getDate(el.createdAt)}
              </S.ListItem>
            </S.List>
          ))}
        </S.Table>
        <Pagination01 {...paginationArgs} />
        <Button02 text="게시물 등록하기" path="/boards/new" />
      </S.Container>
    </S.Wrapper>
  );
}
