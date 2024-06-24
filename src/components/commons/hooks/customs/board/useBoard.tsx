import { useRouter } from "next/router";
// Hooks
import { FETCH_BOARD, useFetchBoard } from "../../queries/board/useFetchBoard";
import { FETCH_BOARDS } from "../../queries/board/useFetchBoards";
import { useCreateBoard } from "../../mutations/board/useCreateBoard";
import { useUpdateBoard } from "../../mutations/board/useUpdateBoard";
import { useDeleteBoard } from "../../mutations/board/useDeleteBoard";
// Component
import { Modal } from "antd";
// Type
import type { IUpdateBoardInput } from "../../../../../commons/types/generated/types";
import type { IFormData } from "../../../../units/board/write/BoardWrite.types";

interface IUseBoardProps {
  fileUrls: string[];
  address: string;
  zipcode: string;
}

export const useBoard = (
  props?: IUseBoardProps
): {
  onClickSubmit: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onClickDelete: () => Promise<void>;
} => {
  const router = useRouter();
  const boardId = router.query.boardId as string;
  const { data: boardData } = useFetchBoard({ boardId });

  const [createBoard] = useCreateBoard();
  const [updateBoard] = useUpdateBoard();
  const [deleteBoard] = useDeleteBoard();

  const onClickSubmit = async (data: IFormData): Promise<void> => {
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
              zipcode: props?.zipcode,
              address: props?.address,
              addressDetail: data.addressDetail,
            },
            images: props?.fileUrls,
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
      Modal.success({ content: "게시물을 등록했습니다." });
      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IFormData): Promise<void> => {
    console.log(data.images);
    const currentFiles = JSON.stringify(props?.fileUrls);
    const defaultFiles = JSON.stringify(boardData?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title !== "") updateBoardInput.title = data.title;
    if (data.contents !== "") updateBoardInput.contents = data.contents;
    if (data.youtubeUrl !== "") updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (data.zipcode !== "" || data.address !== "" || data.addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (data.zipcode !== "") updateBoardInput.boardAddress.zipcode = props?.zipcode;
      if (data.address !== "") updateBoardInput.boardAddress.address = props?.address;
      if (data.addressDetail !== "") updateBoardInput.boardAddress.addressDetail = data.addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = props?.fileUrls;

    try {
      console.log(props);
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
      Modal.success({ content: "게시물을 수정했습니다." });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteBoard({
        variables: { boardId },
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
