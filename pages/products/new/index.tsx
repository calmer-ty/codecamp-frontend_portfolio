import ProductWrite from "../../../src/components/units/product/write/ProductWrite.index";
import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";

export default function ProductsNewPage(): JSX.Element {
  useAuth();
  return <ProductWrite isEdit={false} />;
}
