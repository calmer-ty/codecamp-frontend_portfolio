import * as S from "./Pagination.styles";
import type { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.PageBtn
        onClick={props.onClickPrevPage}
        onDisable={props.startPage <= 1}
      >
        {"<"}
      </S.PageBtn>
      {/* {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              id={String(props.startPage + index)}
              onClick={props.onClickPage}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )} */}
      {new Array(10)
        .fill(1)
        .filter((_, index) => {
          const currentPage = props.startPage + index;
          return currentPage <= props.lastPage;
        })
        .map((_, index) => (
          <S.Page
            key={props.startPage + index}
            id={String(props.startPage + index)}
            onClick={props.onClickPage}
            isActive={props.startPage + index === props.activedPage}
          >
            {props.startPage + index}
          </S.Page>
        ))}

      <S.PageBtn
        onClick={props.onClickNextPage}
        onDisable={props.lastPage - props.startPage < 10}
      >
        {">"}
      </S.PageBtn>
    </S.Wrapper>
  );
}
