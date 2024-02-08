import { useRouter } from "next/router";
import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";
import { FETCH_BOARD } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/useQueryFetchBoards";

import type { IFormData } from "../../../units/board/write/BoardWrite.types";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export const useBoard = () => {
  const router = useRouter();
  const boardId = router.query.boardId;

  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();
  const [deleteBoard] = useMutationDeleteBoard();

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    const { zipcode, address, addressDetail, setting, ...inputs } = data;

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            // images: fileUrls,
          },
        },
      });
      console.log(result);
      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    // const isChangedFiles = currentFiles !== defaultFiles;

    if (data.password === "") {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title !== "") updateBoardInput.title = data.title;
    if (data.contents !== "") updateBoardInput.contents = data.contents;
    if (data.youtubeUrl !== "") updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (
      data.zipcode !== "" ||
      data.address !== "" ||
      data.addressDetail !== ""
    ) {
      updateBoardInput.boardAddress = {};
      if (data.zipcode !== "")
        updateBoardInput.boardAddress.zipcode = data.zipcode;
      if (data.address !== "")
        updateBoardInput.boardAddress.address = data.address;
      if (data.addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = data.addressDetail;
    }
    // if (isChangedFiles) updateBoardInput.images = fileUrls;

    // boardId의 타입이 문자가 아닐 때 함수 실행 종료
    if (typeof boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      const result = await updateBoard({
        variables: {
          boardId,
          password: data.password,
          updateBoardInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId },
          },
        ],
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      await deleteBoard({
        variables: { boardId },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    Modal.error({ content: "게시물이 삭제되었습니다." });
    void router.push(`/boards`);
  };

  return {
    onClickSubmit,
    onClickUpdate,
    onClickDelete,
  };
};
