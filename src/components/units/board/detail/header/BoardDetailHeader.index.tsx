import * as S from "./BoardDetailHeader.styles";

import { getDate } from "../../../../../commons/libraries/utils";
import type { IBoardDetailProps } from "../BoardDetail.types";
import UserIcon01 from "../../../../commons/icon/user/01";

export default function BoardDetailHeader(props: IBoardDetailProps): JSX.Element {
  return (
    <S.Header>
      <S.FlexRow>
        <UserIcon01 size={32} padding={8} />
        <S.FlexColumn>
          <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
          <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
        </S.FlexColumn>
      </S.FlexRow>
      <S.FlexRow>
        <S.OptBtn src="/images/board/detail/ic_link.png"></S.OptBtn>
        <S.AddressInfo title={`${props.data?.fetchBoard?.boardAddress?.address ?? ""} ${props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""}`}>
          <S.OptBtn src="/images/board/detail/ic_location.png"></S.OptBtn>
        </S.AddressInfo>
      </S.FlexRow>
    </S.Header>
  );
}
