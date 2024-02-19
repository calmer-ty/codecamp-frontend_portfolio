import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
// QUERIES
// UI
import MarketListUI from "./MarketList.presenter";
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { FETCH_BOARDS_COUNT } from "../../../commons/hooks/queries/useFetchBoardCount";
import { FETCH_USEDITEMS } from "../../../commons/hooks/queries/useFetchMarkets";

export default function MarketList(): JSX.Element {
  // Boards API
  const { data, refetch } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS);

  const { refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    // 보드 카운트를 검색할 때마다 리패치 한다
  >(FETCH_BOARDS_COUNT);

  // const { data: dataBestItem } =
  //   useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_USEDITEM);

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
        // best
        // dataBestItem={dataBestItem}
      />
    </>
  );
}
