// import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite_firebase.container";

export default function BoardsNewPage(): JSX.Element {
  return <BoardWrite isEdit={false} />;
}
