import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.index";
import { useFetchBoard } from "../../../../src/components/commons/hooks/queries/useFetchBoard";

export default function BoardsEditPage(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  // edit 페이지만 데이터를 불러와야하기 때문에 edit만 fetch gql를 추가해준다
  const { data } = useFetchBoard({
    boardId: router.query.boardId,
  });

  return <BoardWrite isEdit={true} data={data} />;
}
