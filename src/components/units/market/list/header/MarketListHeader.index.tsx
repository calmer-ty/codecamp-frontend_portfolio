import { useFetchMarketsBest } from "../../../../commons/hooks/queries/useFetchMarketsBest";
import HeartIcon01 from "../../../../commons/icon/heart/01";
// Style
import * as S from "./MarketListHeader.styles";

export default function MarketListHeader(): JSX.Element {
  const { data } = useFetchMarketsBest();
  return (
    <S.Header>
      <S.Title>베스트 상품</S.Title>
      <S.ListWrap>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <S.List key={el._id}>
            <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} alt="" />
            <S.ItemTitle>{el.name}</S.ItemTitle>
            <S.ItemRemark>{el.remarks}</S.ItemRemark>
            <S.ItemPrice>{el.price?.toLocaleString()}원</S.ItemPrice>

            <S.Like>
              <HeartIcon01 size={20} />
              <span>{el.pickedCount}</span>
            </S.Like>
          </S.List>
        ))}
      </S.ListWrap>
    </S.Header>
  );
}
