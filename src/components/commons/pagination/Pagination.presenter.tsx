import * as S from "./Pagination.styles";
import type { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.startPage !== 1 && (
        <button onClick={props.onClickPrevPage}>{"<"}</button>
      )}
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              id={String(props.startPage + index)}
              onClick={props.onClickPage}
              style={{ fontSize: "20px", margin: "5px" }}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )}

      {props.lastPage - props.startPage > 10 && (
        <button onClick={props.onClickNextPage}>{">"}</button>
      )}
    </S.Wrapper>
  );
}
