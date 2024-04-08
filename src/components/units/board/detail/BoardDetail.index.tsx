// Custom Hooks
import { useFetchBoard } from "../../../commons/hooks/queries/board/useFetchBoard";
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
// UI
import BoardDetailHeader from "./header/BoardDetailHeader.index";
import BoardDetailBody from "./body/BoardDetailBody.index";
import BoardDetailFooter from "./footer/BoardDetailFooter.index";
// Style
import * as S from "./BoardDetail.styles";

export default function BoardDetail(): JSX.Element {
  const { id } = useIdCheck("boardId");
  const { data } = useFetchBoard({
    boardId: id,
  });

  return (
    <>
      <S.CardWrap>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
      </S.CardWrap>
      <BoardDetailFooter />
    </>
  );
}
