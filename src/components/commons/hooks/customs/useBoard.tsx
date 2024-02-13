import { useRouter } from "next/router";

import { FETCH_BOARD } from "../../../commons/hooks/queries/useFetchBoard";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/useFetchBoards";

import { Modal } from "antd";

// Custom Hooks
import { useCreateBoard } from "../mutations/useCreateBoard";
import { useUpdateBoard } from "../mutations/useUpdateBoard";
import { useDeleteBoard } from "../mutations/useDeleteBoard";

import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import type { IFormData } from "../../../units/board/write/BoardWrite.types";

// interface IUseBoard {
//   fileUrls?: string[];
//   zipcode?: string;
//   address?: string;
// }

export const useBoard =
  // (args: IUseBoard)
  (fileUrls?: string[], zipcode?: string, address?: string) => {
    const router = useRouter();
    const boardId = router.query.boardId;

    const [createBoard] = useCreateBoard();
    const [updateBoard] = useUpdateBoard();
    const [deleteBoard] = useDeleteBoard();

    // const { data: dataBoard } = useBoard();
    // console.log(dataBoard);
    console.log(fileUrls);

    const onClickSubmit = async (data: IFormData): Promise<void> => {
      console.log(data);

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: data.writer,
              password: data.password,
              title: data.title,
              contents: data.contents,
              youtubeUrl: data.youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: data.addressDetail,
              },
              images: fileUrls,
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
      // const { zipcode, address, addressDetail, mainSetting, ...data } = data;

      const currentFiles = JSON.stringify(fileUrls);
      const defaultFiles = JSON.stringify(data.images);
      const isChangedFiles = currentFiles !== defaultFiles;

      console.log(fileUrls);
      console.log(data.images);

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
          updateBoardInput.boardAddress.zipcode = zipcode;
        if (data.address !== "")
          updateBoardInput.boardAddress.address = address;
        if (data.addressDetail !== "")
          updateBoardInput.boardAddress.addressDetail = data.addressDetail;
      }
      if (isChangedFiles) updateBoardInput.images = fileUrls;

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
