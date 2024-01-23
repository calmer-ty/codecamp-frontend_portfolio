import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BoardWrite from "../../../../src/components/units_firebase/board/write/BoardWrite.container";

import { firebaseApp } from "../../../../src/commons/libraries/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";

export default function BoardsEditPage(): JSX.Element {
  const router = useRouter();
  const db = getFirestore(firebaseApp);

  const [docData, setDocData] = useState<DocumentData>({});
  useEffect(() => {
    const query = async (): Promise<void> => {
      const docRef = doc(db, "board", String(router.query.boardId));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDocData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    void query();
  }, [docData]);

  console.log(docData);

  return <BoardWrite isEdit={true} docData={docData} />;
}
