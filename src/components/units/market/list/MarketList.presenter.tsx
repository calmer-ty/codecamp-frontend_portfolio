import * as S from "./MarketList.styles";
import { getDate } from "../../../../commons/libraries/utils";

import type { MarketListUIProps } from "./MarketList.types";
// import Pagination01 from "../../../commons/paginations/01/Pagination01.index";
import Searchbar01 from "../../../commons/searchbars/01/Searchbar01.index";
import { v4 as uuidv4 } from "uuid";
import Button02 from "../../../commons/element/buttons/02";

const SECRET_STRING = "!@#$";

export default function MarketListUI(props: MarketListUIProps): JSX.Element {
  // console.log(props.dataBestItem?.fetchBoardsOfTheBest);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          {/* {props.dataBestItem?.fetchBoardsOfTheBest?.map((el, index) => {
            console.log(el);
            return <div key={el?._id}>{index}</div>;
          })} */}
          임시
        </S.Header>
        <Searchbar01 onChangeSearch={props.onChangeSearch} />
        <S.Table>
          {props.data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
              <S.ListItem>{String(el._id).slice(-4).toUpperCase()}</S.ListItem>
              <S.ListItemTitle
                onClick={props.onClickMoveToPage(`/markets/${el._id}`)}
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
              <S.ListItem>{el.seller}</S.ListItem>
              <S.ListItem>{getDate(el.createdAt)}</S.ListItem>
            </S.List>
          ))}
        </S.Table>

        {/* <Pagination01 refetch={props.refetch} count={props.count} /> */}
        <Button02 text="상품 등록하기" path="/markets/new" />
      </S.Container>
    </S.Wrapper>
  );
}
