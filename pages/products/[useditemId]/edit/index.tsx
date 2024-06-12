import { useRouter } from "next/router";

import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.index";
import { useFetchProduct } from "../../../../src/components/commons/hooks/queries/product/useFetchProduct";

export default function ProductsEditPage(): JSX.Element {
  const router = useRouter();
  const useditemId = router.query.useditemId as string;
  const { data } = useFetchProduct({ useditemId });

  return <ProductWrite isEdit={true} data={data} />;
}
