import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
// QUERIES
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";
// PRESENTER
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardComment() {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: 5,
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
  };

  return (
    <BoardCommentWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
    />
  );
}
