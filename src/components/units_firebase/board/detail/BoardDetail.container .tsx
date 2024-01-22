// UI
import BoardDetailUI from "./BoardDetail.presenter";

// Firebase
import {
  type DocumentData,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const db = getFirestore(firebaseApp);

  const [docData, setDocData] = useState<DocumentData>({});
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [password, setPassword] = useState("");

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
  }, []);

  console.log(typeof docData);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  // 게시물 목록 이동
  const onClickMoveToList = (): void => {
    void router.push(`/boards_firebase`);
  };

  // 게시물 수정
  const onClickMoveToEdit = (): void => {
    void router.push(`/boards_firebase/${String(router.query.boardId)}/edit`);
  };

  // 게시물 삭제
  const onToggleDeleteModal = (): void => {
    setIsOpenDeleteModal((prev) => !prev);
  };
  const onClickDeleteBoard = async (): Promise<void> => {
    if (docData.password !== password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    await deleteDoc(doc(db, "board", String(router.query.boardId)));
    alert(`게시물이 삭제되었습니다.`);
    void router.push(`/boards_firebase`);
  };

  return (
    <BoardDetailUI
      docData={docData}
      // List
      onClickMoveToList={onClickMoveToList}
      // Update
      onClickMoveToEdit={onClickMoveToEdit}
      // Delete
      onChangePassword={onChangePassword}
      isOpenDeleteModal={isOpenDeleteModal}
      onToggleDeleteModal={onToggleDeleteModal}
      setIsOpenDeleteModal={setIsOpenDeleteModal}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
