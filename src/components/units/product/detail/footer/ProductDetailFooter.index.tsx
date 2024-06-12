import { memo } from "react";

import InfiniteScroll from "react-infinite-scroller";
import useScrollQuestion from "../../../../commons/hooks/customs/product/useScrollQuestion";

import QuestionWrite from "../../../../commons/comments/product/write/QuestionWrite.index";
import QuestionList from "../../../../commons/comments/product/list/QuestionList.index";

import * as S from "./ProductDetailFooter.styles";

function ProductDetailFooter(): JSX.Element {
  const { data, onLoadMore } = useScrollQuestion();

  return (
    <S.Footer>
      <QuestionWrite isEdit={false} />
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestions.map((el, _) => <QuestionList key={el._id} el={el}></QuestionList>) ?? <></>}
      </InfiniteScroll>
    </S.Footer>
  );
}
export default memo(ProductDetailFooter);
