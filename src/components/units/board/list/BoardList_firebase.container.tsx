import { useRouter } from "next/router";
import { useEffect, type MouseEvent, useState } from "react";

// UI
import BoardListUI from "./BoardList_firebase.presenter";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import type { DocumentData } from "firebase/firestore/lite";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [boardsData, setBoardsData] = useState<DocumentData[]>([]);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setBoardsData(boards);
      console.log(boards);
    };
    void fetchBoards();
  }, []);

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    // 이벤트 타겟은 여러 기능으로 사용되기 떄문에 타입을 정의해주어야 한다.
    if (event.target instanceof HTMLButtonElement)
      void router.push(`/boards/${event.target.id}`);
    // console.log(event.target.id);
  };

  return (
    <>
      <BoardListUI
        boardsData={boardsData}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </>
  );
}
