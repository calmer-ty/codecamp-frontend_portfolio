import { useRouter } from "next/router";

import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";

import { FETCH_BOARD } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/useQueryFetchBoards";

import { Modal } from "antd";

import type { IFormData } from "../../../units/board/write_after/BoardWrite.types";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";

export const useBoard = (
  images?: string[],
  address?: string,
  zipcode?: string
) => {
  const router = useRouter();
  const boardId = router.query.boardId;

  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();
  const [deleteBoard] = useMutationDeleteBoard();

  const onClickSubmit = async (data: IFormData): Promise<void> => {
    const { addressDetail, setting, ...inputs } = data;

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    // console.log(data);
    // if (data.title !== "") {
    //   Modal.error({ content: "내용이 수정되지 않았습니다." });
    //   return;
    // }
    const currentFiles = JSON.stringify(images);
    const defaultFiles = JSON.stringify(images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};

    if (data.title !== "") updateBoardInput.title = data.title;
    if (data.contents !== "") updateBoardInput.contents = data.contents;
    if (data.youtubeUrl !== "") updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (zipcode !== "" || address !== "" || data.addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (data.addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = data.addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = images;

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
      if (error instanceof Error) Modal.error({ content: error.message });
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
      if (error instanceof Error) Modal.error({ content: error.message });
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
