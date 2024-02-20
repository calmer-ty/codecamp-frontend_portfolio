import * as S from "./MarketDetail.styles";
// Custom Hooks
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
import { useFetchMarket } from "../../../commons/hooks/queries/useFetchMarket";
import { useMarket } from "../../../commons/hooks/customs/useMarket";
// UI
import MarketDetailBody from "./body/MarketDetailBody.index";
import MarketDetailHeader from "./header/MarketDetailHeader.index";
import MarketDetailFooter from "./footer/MarketDetailFooter.index";

export default function MarketDetail(): JSX.Element {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchMarket({
    useditemId: id,
  });

  const { onClickDelete } = useMarket();

  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <MarketDetailHeader data={data} />
          <MarketDetailBody data={data} onClickDelete={onClickDelete} />
        </S.CardWrap>
        <MarketDetailFooter />
      </S.Wrapper>
    </>
  );
}
