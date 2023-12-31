import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
// QUERIES
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
// TYPES
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
// PRESENTER
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  // 아래 조건 시 빈 화면
  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // 게시물 리스트 페이지로 이동
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };
  // 게시물 수정 페이지로 이동
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  // 게시물 삭제
  const onClickDeleteBoardDetail = async () => {
    if (!data || typeof data.fetchBoard._id !== "string") return;

    try {
      await deleteBoard({
        variables: { boardId: data.fetchBoard._id },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    alert("게시물이 삭제되었습니다");
    router.push(`/boards`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickDeleteBoardDetail={onClickDeleteBoardDetail}
    />
  );
}
