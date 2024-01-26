import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { MouseEvent, ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
// QUERIES
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
// UI
import BoardListUI from "./BoardList.presenter";
import _ from "lodash";

export default function BoardList(): JSX.Element {
  // Router
  const router = useRouter();

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  // Boards API
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    // 이벤트 타겟은 여러 기능으로 사용되기 떄문에 타입을 정의해주어야 한다.
    if (event.target instanceof HTMLButtonElement)
      void router.push(`/boards/${event.target.id}`);
  };

  // 검색 기능
  const [keyword, setKeyword] = useState("");

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  const getDebounce = _.debounce((value: string) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  return (
    <>
      <BoardListUI
        data={data}
        refetch={refetch}
        count={dataBoardsCount?.fetchBoardsCount}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        // 검색
        onChangeSearch={onChangeSearch}
        keyword={keyword}
      />
    </>
  );
}
