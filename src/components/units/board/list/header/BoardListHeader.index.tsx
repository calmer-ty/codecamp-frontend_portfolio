import Searchbar01 from "../../../../commons/element/searchbars/01";
import type { IBoardDetailHeaderProps } from "../BoardList.types";

export default function BoardListHeader(props: IBoardDetailHeaderProps): JSX.Element {
  return <Searchbar01 onChangeSearch={props.onChangeSearch} />;
}
