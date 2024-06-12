import * as S from "./BoardList.styles";

// Custom Hooks
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
import { usePagination } from "../../../commons/hooks/customs/usePagination";
import { useFetchBoards } from "../../../commons/hooks/queries/board/useFetchBoards";
import { useFetchBoardsCount } from "../../../commons/hooks/queries/board/useFetchBoardCount";

import BoardListHeader from "./header/BoardListHeader.index";
import BoardListBody from "./body/BoardListBody.index";
import BoardListFooter from "./footer/BoardListFooter.index";
import Pagination01 from "../../../commons/element/paginations/01";

export default function BoardList(): JSX.Element {
  const { data, refetch } = useFetchBoards();
  const { data: dataBoardsCount, refetch: refetchCount } = useFetchBoardsCount();

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
        <BoardListHeader onChangeSearch={onChangeSearch} />
        <BoardListBody data={data} keyword={keyword} />
        <BoardListFooter>
          <Pagination01 {...paginationArgs} />
        </BoardListFooter>
      </S.Container>
    </S.Wrapper>
  );
}
