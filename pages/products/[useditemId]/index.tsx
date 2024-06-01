import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.index";
import { useFetchProducts } from "../../../src/components/commons/hooks/queries/product/useFetchProducts";

export default function ProductsDetailPage(): JSX.Element {
  const aaa = useFetchProducts();
  console.log(aaa);
  return <ProductDetail />;
}
