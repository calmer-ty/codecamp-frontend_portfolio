import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.index";
import { useIdCheck } from "../../../../src/components/commons/hooks/customs/useIdCheck";
import { useFetchProduct } from "../../../../src/components/commons/hooks/queries/product/useFetchProduct";

export default function ProductsEditPage(): JSX.Element {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({
    useditemId: id,
  });

  return <ProductWrite isEdit={true} data={data} />;
}
