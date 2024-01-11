import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
// QUERIES
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
// UI
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import type { BoardCommentWriteProps } from "./BoardCommentWrite.types";
import type { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";

export default function BoardCommentWrite(
  props: BoardCommentWriteProps
): JSX.Element {
  const router = useRouter();

  console.log(props.el?._id);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  // 등록 기능
  const onClickWrite = async (): Promise<void> => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
    setWriter("");
    setPassword("");
    setContents("");
  };

  // 수정 기능
  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents !== "") updateBoardCommentInput.contents = contents;
    if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating;

    // boardId의 타입이 문자가 아닐 때 함수 실행 종료
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 좋아요 기능

  return (
    <BoardCommentWriteUI
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      setRating={setRating}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
