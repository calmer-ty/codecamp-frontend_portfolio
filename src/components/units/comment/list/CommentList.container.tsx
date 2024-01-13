import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_COMMENTS } from "./CommentList.queries";
import * as S from "./CommentList.styles";

import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import CommentItem from "../../../commons/commentItem";

export default function CommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {data?.fetchBoardComments.map((el, _) => (
            <CommentItem key={el._id} el={el}></CommentItem>
          ))}
        </S.Container>
      </S.Wrapper>
    </>
  );
}
