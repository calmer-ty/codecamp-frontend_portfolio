import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
// QUERIES
import { FETCH_USEDITEMS } from "./MarketList.queries";
// UI
import MarketListUI from "./MarketList.presenter";
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
import { FETCH_BOARDS_COUNT } from "../../board/list/BoardList.queries";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";

export default function MarketList(): JSX.Element {
  // Boards API
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const { refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    // 보드 카운트를 검색할 때마다 리패치 한다
  >(FETCH_BOARDS_COUNT);

  const { onClickMoveToPage } = useMoveToPage();

  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
    refetchCount,
  });
  return (
    <>
      <MarketListUI
        data={data}
        refetch={refetch}
        onClickMoveToPage={onClickMoveToPage}
        // 검색
        keyword={keyword}
        onChangeSearch={onChangeSearch}
      />
    </>
  );
}
