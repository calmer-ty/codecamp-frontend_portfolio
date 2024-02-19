import * as S from "./MarketListHeader.styles";
import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import type { IMarketListHeaderProps } from "../MarketList.types";

export default function MarketListHeader(props: IMarketListHeaderProps): JSX.Element {
  return (
    <S.Header>
      <S.BestList>임시</S.BestList>
      <Searchbar01 onChangeSearch={props.onChangeSearch} />
    </S.Header>
  );
}
