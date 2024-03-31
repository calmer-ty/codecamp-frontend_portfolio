import { WithAuth } from "../../src/components/commons/hocs/withAuth";
import ProductList from "../../src/components/units/product/list/ProductList.index";

function ProductsPage(): JSX.Element {
  return <ProductList />;
}

export default WithAuth(ProductsPage);
