import * as S from "./MarketList.styles";
// Custom Hooks
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
import { useFetchMarkets } from "../../../commons/hooks/queries/useFetchMarkets";
// UI
import MarketListHeader from "./header/MarketListHeader.index";
import MarketListBody from "./body/MarketListBody.index";
import MarketListFooter from "./footer/MarketListFooter.index";

export default function MarketList(): JSX.Element {
  const { data, refetch } = useFetchMarkets();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });

  return (
    <S.Wrapper>
      <S.Container>
        <MarketListHeader onChangeSearch={onChangeSearch} />
        <MarketListBody data={data} keyword={keyword} />
        <MarketListFooter />
      </S.Container>
    </S.Wrapper>
  );
}
