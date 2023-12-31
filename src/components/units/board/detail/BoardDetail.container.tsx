import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
// QUERIES
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
// TYPES
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
// PRESENTER
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  // 아래 조건 시 빈 화면
  if (typeof router.query.boardId !== "string") return <></>;

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
  const onClickMoveToBoardList = (): void => {
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

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
  console.log(data);
  const onClickDeleteBoardDetail = async (): Promise<void> => {
    if (data?.fetchBoard._id !== "string") {
      // if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      await deleteBoard({
        variables: { boardId: data.fetchBoard._id },
        // variables: { boardId: typeof router.query.boardId },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    alert("게시물이 삭제되었습니다");
    void router.push(`/boards`);
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
