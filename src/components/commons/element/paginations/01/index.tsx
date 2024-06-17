import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as S from "./styles";
import type { IPagination01Props } from "./types";

export default function Pagination01(props: IPagination01Props): JSX.Element {
  return (
    <S.Pagination>
      <S.PageBtn onClick={props.onClickPrevPage} isDisabled={props.startPage <= 1}>
        <LeftOutlined />
      </S.PageBtn>
      {new Array(10)
        .fill(1)
        .filter((_, index) => {
          const currentPage = props.startPage + index;
          return currentPage <= props.lastPage;
        })
        .map((_, index) => (
          <S.Page key={props.startPage + index} id={String(props.startPage + index)} onClick={props.onClickPage} isActive={props.startPage + index === props.activedPage}>
            {props.startPage + index}
          </S.Page>
        ))}

      <S.PageBtn onClick={props.onClickNextPage} isDisabled={props.lastPage - props.startPage < 10}>
        <RightOutlined />
      </S.PageBtn>
    </S.Pagination>
  );
}
