import { useState } from "react";
import type { MouseEvent } from "react";
import * as S from "./Pagination01.styles";
import type { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = (): void => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setActivedPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <S.Wrapper>
      <S.PageBtn onClick={onClickPrevPage} isDisabled={startPage <= 1}>
        {"<"}
      </S.PageBtn>
      {new Array(10)
        .fill(1)
        .filter((_, index) => {
          const currentPage = startPage + index;
          return currentPage <= lastPage;
        })
        .map((_, index) => (
          <S.Page
            key={startPage + index}
            id={String(startPage + index)}
            onClick={onClickPage}
            isActive={startPage + index === activedPage}
          >
            {startPage + index}
          </S.Page>
        ))}

      <S.PageBtn
        onClick={onClickNextPage}
        isDisabled={lastPage - startPage < 10}
      >
        {">"}
      </S.PageBtn>
    </S.Wrapper>
  );
}
