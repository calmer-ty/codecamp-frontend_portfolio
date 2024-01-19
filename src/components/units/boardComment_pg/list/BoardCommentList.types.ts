import type {
  IQuery,
  IBoardComment,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;

  // 무한스크롤
  onLoadMore: () => void;
}
export interface IBoardCommentListItemProps {
  el: IBoardComment;
}
