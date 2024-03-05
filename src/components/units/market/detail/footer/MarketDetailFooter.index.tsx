import * as S from "./MarketDetailFooter.styles";

import InfiniteScroll from "react-infinite-scroller";
import { useScrollQuestion } from "../../../../commons/hooks/customs/useScrollQuestion";

import QuestionWrite from "../../../../commons/comments/market/write/QuestionWrite.index";
import QuestionList from "../../../../commons/comments/market/list/QuestionList.index";

export default function MarketDetailFooter() {
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
