import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

// edit 페이지만 데이터를 불러와야하기 때문에 edit만 fetch gql를 추가해준다
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardsEditPage(): JSX.Element {
  const router = useRouter();
  // boardId의 타입을 정확히 넣어주기 위한 조건
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: router.query.boardId } }
  );

  return <BoardWrite isEdit={true} data={data} />;
}
