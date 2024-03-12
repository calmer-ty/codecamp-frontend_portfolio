import * as S from "./BoardDetail.styles";

// Custon Hooks
import { useFetchBoard } from "../../../commons/hooks/queries/board/useFetchBoard";
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";

import BoardDetailHeader from "./header/BoardDetailHeader.index";
import BoardDetailBody from "./body/BoardDetailBody.index";
import BoardDetailFooter from "./footer/BoardDetailFooter.index";

export default function BoardDetail(): JSX.Element {
  const { id } = useIdCheck("boardId");
  const { data } = useFetchBoard({
    boardId: id,
  });

  return (
    <S.Wrapper>
      <S.CardWrap>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
      </S.CardWrap>
      <BoardDetailFooter data={data} />
    </S.Wrapper>
  );
}
