import * as S from "./BoardDetailHeader.styles";

import { getDate } from "../../../../../commons/libraries/utils";
import type { IBoardDetailProps } from "../BoardDetail.types";

export default function BoardDetailHeader(props: IBoardDetailProps): JSX.Element {
  return (
    <S.Header>
      <S.FlexRow>
        <S.Avatar src="/images/board/detail/ic_profile.png"></S.Avatar>
        <S.FlexColumn>
          <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
          <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
        </S.FlexColumn>
      </S.FlexRow>
      <S.FlexRow>
        <S.OptBtn src="/images/board/detail/ic_link.png"></S.OptBtn>
        <S.AddressInfo
          title={`${props.data?.fetchBoard?.boardAddress?.address ?? ""} ${
            props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""
          }`}
        >
          <S.OptBtn src="/images/board/detail/ic_location.png"></S.OptBtn>
        </S.AddressInfo>
      </S.FlexRow>
    </S.Header>
  );
}
