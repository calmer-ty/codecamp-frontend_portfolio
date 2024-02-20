import * as S from "./BoardDetailFooter.styles";

import Link from "next/link";
import { useBoard } from "../../../../commons/hooks/customs/useBoard";
import type { IBoardDetailProps } from "../BoardDetail.types";

export default function BoardDetailFooter(props: IBoardDetailProps): JSX.Element {
  const { onClickDelete } = useBoard();

  return (
    <S.Footer>
      <Link href={"/boards"}>
        <S.LinkBtn>목록으로</S.LinkBtn>
      </Link>
      <Link href={`/boards/${props.data?.fetchBoard._id}/edit`}>
        <S.LinkBtn>수정하기</S.LinkBtn>
      </Link>
      <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
    </S.Footer>
  );
}
