import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.index";
import { useFetchMarket } from "../../../../src/components/commons/hooks/queries/useFetchMarket";
import { useIdCheck } from "../../../../src/components/commons/hooks/customs/useIdCheck";

export default function MarketsEditPage(): JSX.Element {
  const { id } = useIdCheck("useditemId");

  const { data } = useFetchMarket({
    useditemId: id,
  });

  return <MarketWrite isEdit={true} data={data} />;
}
