import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import type { IBoardDetailHeaderProps } from "../BoardList.types";

export default function BoardListHeader(props: IBoardDetailHeaderProps): JSX.Element {
  return <Searchbar01 onChangeSearch={props.onChangeSearch} />;
}
