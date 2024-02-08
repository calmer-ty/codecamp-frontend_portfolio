import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
// QUERIES
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
// UI
import BoardListUI from "./BoardList.presenter";

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

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
    // 보드 카운트를 검색할 때마다 리패치 한다
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    // 이벤트 타겟은 여러 기능으로 사용되기 떄문에 타입을 정의해주어야 한다 => 이벤트 버블링으로 인해 currentTarget으로 사용하면 id를 지정해줄 수 있다
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  // 검색 기능
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };
  // 키워드가 바뀔 때마다 리랜더링 하는 함수를 검색 컴포넌트로 보내준다

  return (
    <>
      <BoardListUI
        data={data}
        refetch={refetch}
        count={dataBoardsCount?.fetchBoardsCount}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        // 검색
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        refetchBoardsCount={refetchBoardsCount}
      />
    </>
  );
}
