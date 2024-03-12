import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.index";
import { useFetchBoard } from "../../../../src/components/commons/hooks/queries/board/useFetchBoard";
import { useIdCheck } from "../../../../src/components/commons/hooks/customs/useIdCheck";

export default function BoardsEditPage(): JSX.Element {
  const { id } = useIdCheck("boardId");

  // edit 페이지만 데이터를 불러와야하기 때문에 edit만 fetch gql를 추가해준다
  const { data } = useFetchBoard({
    boardId: id,
  });

  return <BoardWrite isEdit={true} data={data} />;
}
