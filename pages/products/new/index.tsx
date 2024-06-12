import useAuth from "../../../src/components/commons/hooks/customs/useAuth";

import ProductWrite from "../../../src/components/units/product/write/ProductWrite.index";

export default function ProductsNewPage(): JSX.Element {
  useAuth();
  return <ProductWrite isEdit={false} />;
}
