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
    </S.Wrapper>
  );
}
