import * as S from "./MarketList.styles";
import { getDate } from "../../../../commons/libraries/utils";

import type { MarketListUIProps } from "./MarketList.types";
import Pagination01 from "../../../commons/paginations/01/Pagination01.container";
import Searchbar01 from "../../../commons/searchbars/01/SearchBar01.index";
import { v4 as uuidv4 } from "uuid";

const SECRET_STRING = "!@#$";

export default function MarketListUI(props: MarketListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <Searchbar01
          onChangeKeyword={props.onChangeKeyword}
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
        />
        <S.Table>
          <S.Header>
            <S.HeaderItem>번호</S.HeaderItem>
            <S.HeaderItemTitle>제목</S.HeaderItemTitle>
            <S.HeaderItem>작성자</S.HeaderItem>
            <S.HeaderItem>날짜</S.HeaderItem>
          </S.Header>
          {props.data?.fetchUseditems.map((el) => (
            <S.List key={el._id}>
              <S.ListItem>{String(el._id).slice(-4).toUpperCase()}</S.ListItem>
              <S.ListItemTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.name
                  .replaceAll(
                    props.keyword,
                    `${SECRET_STRING}${props.keyword}${SECRET_STRING}`
                  )
                  .split(SECRET_STRING)
                  .map((el) => (
                    <S.KeywordToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.KeywordToken>
                  ))}
              </S.ListItemTitle>
              {/* <S.ListItem>{el.seller}</S.ListItem> */}
              <S.ListItem>{getDate(el.createdAt)}</S.ListItem>
            </S.List>
          ))}
        </S.Table>

        <Pagination01 refetch={props.refetch} count={props.count} />
        <S.MoveBtn onClick={props.onClickMoveToBoardNew}>
          <S.MoveBtnIcon src="/images/board/list/ic_create.png" />
          상품 등록하기
        </S.MoveBtn>
      </S.Container>
    </S.Wrapper>
  );
}
