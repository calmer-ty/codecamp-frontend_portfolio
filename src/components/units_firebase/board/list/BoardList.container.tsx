import { useRouter } from "next/router";
import { useEffect, type MouseEvent, useState } from "react";

// UI
import BoardListUI from "./BoardList.presenter";
import {
  type DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const db = getFirestore(firebaseApp);
  const [docs, setDocs] = useState<DocumentData>();

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards_firebase/new");
  };

  useEffect(() => {
    const query = async (): Promise<void> => {
      const querySnapshot = await getDocs(collection(db, "board"));
      const datas = querySnapshot.docs.map((el) => el);
      setDocs(datas);
    };
    void query();
  }, []);

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    // 이벤트 타겟은 여러 기능으로 사용되기 떄문에 타입을 정의해주어야 한다.
    if (event.target instanceof HTMLButtonElement)
      void router.push(`/boards_firebase/${event.target.id}`);
  };

  return (
    <>
      <BoardListUI
        docs={docs}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </>
  );
}
