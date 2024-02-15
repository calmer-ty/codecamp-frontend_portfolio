import { useState } from "react";

import CommentWriteUI from "./CommentWrite.presenter";

import type { ChangeEvent } from "react";
import type { IUpdateBoardCommentInput } from "../../../../../commons/types/generated/types";
import type { ICommentWriteProps } from "./CommentWrite.types";

// Custom Hooks
import { useIdCheck } from "../../../hooks/customs/useIdCheck";
import { FETCH_COMMENTS } from "../../../hooks/queries/useFetchBoardComment";
import { useCreateBoardComment } from "../../../hooks/mutations/useCreateBoardComment";
import { useUpdateBoardComment } from "../../../hooks/mutations/useUpdateBoardComment";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  // Var
  // const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
  });
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(1);

  const [createComment] = useCreateBoardComment();
  const [updateComment] = useUpdateBoardComment();

  // Function
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  // Write
  const { id } = useIdCheck("boardId");

  const onClickWrite = async (): Promise<void> => {
    try {
      await createComment({
        variables: {
          createBoardCommentInput: {
            ...inputs,
            contents,
            rating,
          },
          boardId: id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setInputs({
      writer: "",
      password: "",
    });
    setContents("");
    setRating(0);
  };

  // Update
  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }
    if (inputs.password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating;

      if (typeof props.el?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await updateComment({
        variables: {
          updateBoardCommentInput,
          password: inputs.password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: id },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickUpdateCancel = (): void => {
    props.setIsEdit?.(false);
  };

  return (
    <CommentWriteUI
      inputs={inputs}
      contents={contents}
      rating={rating}
      setRating={setRating}
      isEdit={props.isEdit}
      onChangeInputs={onChangeInputs}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      onClickUpdateCancel={onClickUpdateCancel}
    />
  );
}
