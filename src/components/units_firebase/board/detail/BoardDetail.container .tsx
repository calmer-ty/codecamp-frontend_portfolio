// UI
import BoardDetailUI from "./BoardDetail.presenter";

// Firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";

export default function BoardDetail(): JSX.Element {
  const db = getFirestore(firebaseApp);

  const router = useRouter();

  // useEffect(() => {
  const fetchBoards = async (): Promise<void> => {
    const docRef = doc(db, "board");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    // console.log(docSnap);
  };
  void fetchBoards();
  // }, []);

  const onClickMoveToBoardList = (): void => {
    void router.push(`/boards_firebase`);
  };

  return <BoardDetailUI onClickMoveToBoardList={onClickMoveToBoardList} />;
}
