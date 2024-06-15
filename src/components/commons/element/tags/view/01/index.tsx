import * as S from "./styles";
import type { ITagsView } from "./types";

export default function TagsView01(props: ITagsView): JSX.Element {
  return <S.Tags>{props.tags?.map((el, index) => <S.TagItem key={`${el}_${index}`}># {el}</S.TagItem>)}</S.Tags>;
}
