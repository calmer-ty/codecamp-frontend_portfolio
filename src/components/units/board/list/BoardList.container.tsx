import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
// QUERIES
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
// UI
import BoardListUI from "./BoardList.presenter";

// Custom Hooks
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
import { usePagination } from "../../../commons/hooks/customs/usePagination";

export default function BoardList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  // Boards API
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    // 보드 카운트를 검색할 때마다 리패치 한다
  >(FETCH_BOARDS_COUNT);

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
    <>
      <BoardListUI
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        // 검색
        keyword={keyword}
        onChangeSearch={onChangeSearch}
        refetchCount={refetchCount}
        paginationArgs={paginationArgs}
      />
    </>
  );
}
