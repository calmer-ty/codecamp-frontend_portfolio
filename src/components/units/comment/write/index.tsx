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

export default function CommentWrite(): JSX.Element {
  // Var
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    rating: 3,
  });
  const [contents, setContents] = useState("");

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);

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

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") return;
      await createComment({
        variables: {
          createBoardCommentInput: {
            ...inputs,
            contents,
          },
          boardId: router.query.boardId,
        },
        // refetchQueries: [],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  //   Test

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <S.TitleImg src="/images/comment/write/ic_logo.png" />
          댓글
        </S.Title>
        <S.RowWrap>
          <S.InfoInput
            type="text"
            id="writer"
            onChange={onChangeInputs}
            placeholder="작성자"
          />
          <S.InfoInput
            type="password"
            id="password"
            onChange={onChangeInputs}
            placeholder="비밀번호"
          />
          <S.RateScore />
        </S.RowWrap>
        <S.ContentsWrap>
          <S.Contents
            id="contents"
            maxLength={100}
            onChange={onChangeContents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.ContentsBottom>
            <S.ContentsLength>
              {contents !== "" ? contents.length : 0}/100
            </S.ContentsLength>
            <S.SubmitBtn onClick={onClickWrite}>등록하기</S.SubmitBtn>
          </S.ContentsBottom>
        </S.ContentsWrap>
      </S.Container>
    </S.Wrapper>
  );
}
