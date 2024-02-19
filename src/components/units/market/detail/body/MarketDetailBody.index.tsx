import Link from "next/link";
import * as S from "./MarketDetailBody.styles";
import type { IMarketDetailBodyProps } from "../MarketDetail.types";

export default function MarketDetailBody(props: IMarketDetailBodyProps) {
  return (
    <S.Body>
      <S.BodyTop>
        <S.BodyHeader>
          <S.TitleText>
            <S.Remark>{props.data?.fetchUseditem?.remarks}</S.Remark>
            <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
            <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
          </S.TitleText>
          <S.PickedCount>{props.data?.fetchUseditem.pickedCount}</S.PickedCount>
        </S.BodyHeader>
        <S.ImgWrap>
          {props.data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el) => <S.ImgItem key={el} src={`http://storage.googleapis.com/${el}`} />)}
        </S.ImgWrap>
        <S.FlexColumn>
          <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
          <p>#tags #tags #tags</p>
        </S.FlexColumn>
      </S.BodyTop>

      <S.BodyBottom>
        <S.Map>Map</S.Map>
      </S.BodyBottom>
      <S.BtnWrap>
        <Link href={"/markets"}>
          <S.MoveBtn>목록으로</S.MoveBtn>
        </Link>
        <Link href={`/markets/${props.data?.fetchUseditem._id}/edit`}>
          <S.MoveBtn>수정하기</S.MoveBtn>
        </Link>
        <S.MoveBtn onClick={props.onClickDelete}>삭제하기</S.MoveBtn>
      </S.BtnWrap>
    </S.Body>
  );
}
