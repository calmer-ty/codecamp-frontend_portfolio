import * as S from "./CommentList.styles";

import CommentItem from "../../../commons/commentItem/CommentItem.index";
import InfiniteScroll from "react-infinite-scroller";
import type { IQuery } from "../../../../commons/types/generated/types";

interface CommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments"> | undefined;
  onLoadMore: () => void;
}

export default function CommentListUI(props: CommentListUIProps): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.data?.fetchBoardComments.map((el, _) => (
              <CommentItem key={el._id} el={el}></CommentItem>
            )) ?? <></>}
          </InfiniteScroll>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
