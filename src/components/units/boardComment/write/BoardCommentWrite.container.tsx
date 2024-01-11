import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
// QUERIES
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";
// UI
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import type { BoardCommentWriteProps } from "./BoardCommentWrite.types";
import { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";

export default function BoardCommentWrite(
  props: BoardCommentWriteProps
): JSX.Element {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);

  console.log(props.el?.);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
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

  const onClickUpdate = async (): Promise<void> => {
    if (contents !== "") {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardCommentInput = {};
    if (contents !== "") updateBoardInput.contents = contents;
    if (rating !== "") updateBoardInput.rating = rating;

    // boardId의 타입이 문자가 아닐 때 함수 실행 종료
    if (typeof router.query.boardId !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 좋아요 기능

  return (
    <BoardCommentWriteUI
      onClickSubmit={onClickSubmit}
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
