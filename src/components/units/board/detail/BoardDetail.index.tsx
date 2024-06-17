import { useRouter } from "next/router";
import { useFetchBoard } from "../../../commons/hooks/queries/board/useFetchBoard";
// UI
import BoardDetailHeader from "./header/BoardDetailHeader.index";
import BoardDetailBody from "./body/BoardDetailBody.index";
import BoardDetailFooter from "./footer/BoardDetailFooter.index";
// Style
import * as S from "./BoardDetail.styles";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const boardId = router.query.boardId as string;
  const { data } = useFetchBoard({ boardId });
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
