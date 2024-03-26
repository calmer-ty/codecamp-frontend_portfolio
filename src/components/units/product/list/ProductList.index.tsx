// UI
import ProductListHeader from "./header/ProductListHeader.index";
import ProductListBody from "./body/ProductListBody.index";
import ProductListFooter from "./footer/ProductListFooter.index";
// Hooks
import { useFetchProductsBest } from "../../../commons/hooks/queries/product/useFetchProductsBest";
import { useScrollProductsList } from "../../../commons/hooks/customs/product/useScrollProductsList";
import { useSearchbar } from "../../../commons/hooks/customs/useSearch";
// Component
import TodayView01 from "../../../commons/todayView/01/TodayView01.index";
// Style
import * as S from "./ProductList.styles";

export default function ProductList(): JSX.Element {
  const { data: dataProductsBest } = useFetchProductsBest();
  const { data: dataProductsList, onLoadMore, refetch } = useScrollProductsList();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });

  return (
    <S.Wrapper>
      <S.Container>
        <ProductListHeader dataProductsBest={dataProductsBest} />
        <ProductListBody
          dataProductsList={dataProductsList}
          onLoadMore={onLoadMore}
          refetch={refetch}
          keyword={keyword}
          onChangeSearch={onChangeSearch}
        />
        <ProductListFooter />
      </S.Container>
      <TodayView01 />
    </S.Wrapper>
  );
}
