import ProductWrite from "../../../src/components/units/product/write/ProductWrite.index";
import { WithAuth } from "../../../src/commons/hocs/withAuth";

function ProductsNewPage(): JSX.Element {
  return <ProductWrite isEdit={false} />;
}
export default WithAuth(ProductsNewPage);
