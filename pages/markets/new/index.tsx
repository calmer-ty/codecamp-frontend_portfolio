import MarketWrite from "../../../src/components/units/market/write/MarketWrite.index";
import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";

export default function MarketsNewPage(): JSX.Element {
  useAuth();
  return <MarketWrite isEdit={false} />;
}
