import { gql, useQuery } from "@apollo/client";
import { type MouseEvent, useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function Pagination(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };
  const onClickPrevPage = (): void => {
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      <button onClick={onClickPrevPage}>(이전페이지)</button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <button
          style={{ fontSize: "20px", margin: "5px" }}
          key={el}
          id={String(el)}
          onClick={onClickPage}
        >
          {el}
        </button>
      ))}
      <button onClick={onClickNextPage}>(다음페이지)</button>
    </>
  );
}
