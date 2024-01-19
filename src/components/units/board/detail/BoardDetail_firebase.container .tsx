import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// UI
import BoardDetailUI from "./BoardDetail_firebase.presenter";

// Firebase
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import type { DocumentData } from "firebase/firestore/lite";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();

  const [boardsData, setBoardsData] = useState<DocumentData[]>([]);

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

  console.log(router);

  // 아래 조건 시 빈 화면
  // if (typeof router.query.boardId !== "string") return <></>;

  // 게시물 리스트 페이지로 이동
  const onClickMoveToBoardList = (): void => {
    // if (typeof router.query.boardId !== "string") {
    //   alert("시스템에 문제가 있습니다.");
    //   return;
    // }

    void router.push("/boards");
  };
  // 게시물 수정 페이지로 이동
  const onClickMoveToBoardEdit = (): void => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    void router.push(`/boards/${router.query.boardId}/edit`);
  };
  // 게시물 삭제
  // const onClickDeleteBoardDetail = async (): Promise<void> => {
  //   if (typeof data?.fetchBoard._id !== "string") {
  //     alert("시스템에 문제가 있습니다.");
  //     return;
  //   }

  //   try {
  //     await deleteBoard({
  //       variables: { boardId: data?.fetchBoard._id },
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }

  //   alert("게시물이 삭제되었습니다.");
  //   void router.push(`/boards`);
  // };

  // 좋아요 데이터 저장 기능
  // const likeSaved = async (): Promise<void> => {
  //   if (typeof data?.fetchBoard._id !== "string") {
  //     alert("시스템에 문제가 있습니다.");
  //     return;
  //   }
  //   try {
  //     await likeBoard({
  //       variables: { boardId: data?.fetchBoard._id },
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };

  // 좋아요 기능
  // const [likeScore, setLikeScore] = useState(0);
  // const [disLikeScore, setDisLikeScore] = useState(0);

  // const onClickLikeScore = (): void => {
  //   setLikeScore((prev) => prev + 1);
  //   void likeSaved();
  // };
  // const onClickDisLikeScore = (): void => {
  //   setDisLikeScore((prev) => prev + 1);
  // };

  return (
    <BoardDetailUI
      boardsData={boardsData}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      // onClickDeleteBoardDetail={onClickDeleteBoardDetail}
      // 좋아요 기능
      // likeScore={likeScore}
      // onClickLikeScore={onClickLikeScore}
      // disLikeScore={disLikeScore}
      // onClickDisLikeScore={onClickDisLikeScore}
    />
  );
}
