import { useState } from "react";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";

import * as S from "./CommentWrite.styles";

//
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "./CommentWrite.queries";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENTS } from "../list/CommentList.queries";

export default function CommentWrite(): JSX.Element {
  // Var
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
  });
  // const [boardCommentId, setBoardCommentId] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);

  // const [updateComment] = useMutation<
  //   Pick<IMutation, "updateBoardComment">,
  //   IMutationUpdateBoardCommentArgs
  // >(UPDATE_COMMENT);

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
  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") return;
      await createComment({
        variables: {
          createBoardCommentInput: {
            ...inputs,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId },
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

  // const onClickUpdate = async (event) => {
  //   if (contents === "") {
  //     alert("수정한 내용이 없습니다.");
  //     return;
  //   }
  //   if (inputs.password === "") {
  //     alert("비밀번호를 입력해주세요.");
  //     return;
  //   }

  //   const updateBoardCommentInput = {};
  //   if (contents !== "") updateBoardCommentInput.contents = contents;
  //   // if(rating !== )

  //   await updateComment({
  //     variables: {
  //       updateBoardCommentInput,
  //       boardCommentId,
  //       password: inputs.password,
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_COMMENTS,
  //         variables: { boardId: router.query.boardId },
  //       },
  //     ],
  //   });
  // };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <S.TitleImage src="/images/comment/write/ic_logo.png" />
          댓글
        </S.Title>
        <S.RowWrapper>
          <S.InfoInput
            type="text"
            id="writer"
            onChange={onChangeInputs}
            placeholder="작성자"
            value={inputs.writer}
          />
          <S.InfoInput
            type="password"
            id="password"
            onChange={onChangeInputs}
            placeholder="비밀번호"
            value={inputs.password}
          />
          <S.RateScore onChange={setRating} value={rating} />
        </S.RowWrapper>
        <S.ContentsWrapper>
          <S.Contents
            id="contents"
            maxLength={100}
            onChange={onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            value={contents}
          />
          <S.ContentsBottom>
            <S.ContentsLength>
              {contents !== "" ? contents.length : 0}/100
            </S.ContentsLength>
            <S.SubmitButton onClick={onClickWrite}>등록하기</S.SubmitButton>
          </S.ContentsBottom>
        </S.ContentsWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
