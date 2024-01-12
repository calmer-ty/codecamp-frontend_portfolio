import { useQuery } from "@apollo/client";
import * as S from "./CommentList.styles";
import { FETCH_COMMENTS } from "./CommentList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function CommentList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);
  console.log(router);
  return (
    <S.Wrapper>
      <S.Container>
        <S.ListItem>
          <S.RowWrap>
            <S.Avatar src="/images/boardComment/list/ic_profile.png" />
            <S.ColWrap>
              <S.RowWrap>
                <S.Writer>{data?.fetchBoardComments[0].writer}</S.Writer>
                <S.RateScore disabled={true} />
              </S.RowWrap>
              <S.Contents>contents</S.Contents>
            </S.ColWrap>
          </S.RowWrap>
          <S.CreateDate>12.12</S.CreateDate>
          <S.OptBtnWrap>
            <S.EditBtn />
            <S.DelBtn />
          </S.OptBtnWrap>
        </S.ListItem>
      </S.Container>
    </S.Wrapper>
  );
}
