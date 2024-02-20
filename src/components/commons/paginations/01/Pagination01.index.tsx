import * as S from "./Pagination01.styles";
import type { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props): JSX.Element {
  return (
    <S.Pagination>
      <S.PageBtn onClick={props.onClickPrevPage} isDisabled={props.startPage <= 1}>
        {"<"}
      </S.PageBtn>
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

      <S.PageBtn onClick={props.onClickNextPage} isDisabled={props.lastPage - props.startPage < 10}>
        {">"}
      </S.PageBtn>
    </S.Pagination>
  );
}
