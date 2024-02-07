import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import type { IFormData } from "../../../units/board/write/BoardWrite.types";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { FETCH_BOARD } from "../../../units/board/detail/BoardDetail.queries";
import { useQueryIdChecker } from "./useQueryIdChecker";
import { useMoveToPage } from "./useMoveToPage";

export const useBoard = () => {
  const { id } = useQueryIdChecker("boardId");
  const { onClickMoveToPage } = useMoveToPage();

  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();

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
      // void router.push(`/boards/${result.data?.createBoard._id}`);
      onClickMoveToPage(`/boards/${result.data?.createBoard._id}`);
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
    if (typeof id !== "string") {
      alert("시스템에 문제가 있습니다.");
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
      onClickMoveToPage(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickSubmit,
    onClickUpdate,
  };
};
