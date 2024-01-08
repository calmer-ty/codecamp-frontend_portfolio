import { gql, useQuery } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
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

export default function Pagination(props): JSX.Element {
  const { refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <button
          key={el}
          onClick={onClickPage}
          id={String(el)}
          style={{ fontSize: "20px", margin: "5px" }}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
