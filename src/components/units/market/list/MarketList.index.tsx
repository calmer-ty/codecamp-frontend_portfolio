import * as S from "./MarketList.styles";
// UI
import MarketListHeader from "./header/MarketListHeader.index";
import MarketListBody from "./body/MarketListBody.index";
import MarketListFooter from "./footer/MarketListFooter.index";

export default function MarketList(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <MarketListHeader />
        <MarketListBody />
        <MarketListFooter />
      </S.Container>
      <S.TodayView>
        <h3>오늘 본 상품</h3>
        <S.ViewItem>111</S.ViewItem>
        <S.ViewItem>222</S.ViewItem>
      </S.TodayView>
    </S.Wrapper>
  );
}
