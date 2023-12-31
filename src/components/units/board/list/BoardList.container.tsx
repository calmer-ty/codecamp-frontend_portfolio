import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
// TYPES
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
// QUERIES
import { FETCH_BOARDS } from "./BoardList.queries";
// PRESENTER
import BoardListUI from "./BoardList.presenter";

export default function BoardList(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const router = useRouter();

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    // 이벤트 타겟은 여러 기능으로 사용되기 떄문에 타입을 정의해주어야 한다.
    if (event.target instanceof HTMLButtonElement)
      void router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
