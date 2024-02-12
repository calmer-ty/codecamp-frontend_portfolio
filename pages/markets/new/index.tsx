import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";

export default function MarketsNewPage(): JSX.Element {
  useAuth();
  return <MarketWrite isEdit={false} />;
}
