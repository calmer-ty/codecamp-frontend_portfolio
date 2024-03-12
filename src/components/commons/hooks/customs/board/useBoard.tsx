import { useRouter } from "next/router";
// Hooks
import { FETCH_BOARD, useFetchBoard } from "../../queries/board/useFetchBoard";
import { FETCH_BOARDS } from "../../queries/board/useFetchBoards";
import { useCreateBoard } from "../../mutations/board/useCreateBoard";
import { useUpdateBoard } from "../../mutations/board/useUpdateBoard";
import { useDeleteBoard } from "../../mutations/board/useDeleteBoard";
import { useIdCheck } from "../useIdCheck";
// Component
import { Modal } from "antd";
// Type
import type { IUpdateBoardInput } from "../../../../../commons/types/generated/types";
import type { IFormData } from "../../../../units/board/write/BoardWrite.types";

interface IUseBoardArgs {
  fileUrls?: string[];
  address: string;
  zipcode: string;
}

export const useBoard = (args: IUseBoardArgs) => {
  const router = useRouter();
  const { id } = useIdCheck("boardId");

  const [createBoard] = useCreateBoard();
  const [updateBoard] = useUpdateBoard();
  const [deleteBoard] = useDeleteBoard();

  const { data: defaultData } = useFetchBoard({
    boardId: id,
  });

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
              zipcode: args.zipcode,
              address: args.address,
              addressDetail: data.addressDetail,
            },
            images: args.fileUrls,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARDS,
        //   },
        // ],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data?.createBoard, ...prev];
              },
            },
          });
        },
      });
      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    const currentFiles = JSON.stringify(args.fileUrls);
    const defaultFiles = JSON.stringify(data.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};

    if (data.title !== "") updateBoardInput.title = data.title;
    if (data.contents !== "") updateBoardInput.contents = data.contents;
    if (data.youtubeUrl !== "") updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (data.zipcode !== "" || data.address !== "" || data.addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (data.zipcode !== "") updateBoardInput.boardAddress.zipcode = args.zipcode;
      if (data.address !== "") updateBoardInput.boardAddress.address = args.address;
      if (data.addressDetail !== "") updateBoardInput.boardAddress.addressDetail = data.addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = args.fileUrls;

    if (defaultData?.fetchBoard.contents === data.contents) {
      Modal.error({ content: "내용이 수정되지 않았습니다." });
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: id,
          password: data.password,
          updateBoardInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: id },
          },
        ],
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteBoard({
        variables: { boardId: id },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
        // update(cache, { data }) {
        //   cache.modify({
        //     fields: {
        //       fetchBoards: (prev: Array<{ __ref: string }>, { readField }) => {
        //         const deletedId = data?.deleteBoard;
        //         const filteredPrev = prev.filter((el) => readField("_id", el) !== deletedId);
        //         return [...filteredPrev];
        //       },
        //     },
        //   });
        // },
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
