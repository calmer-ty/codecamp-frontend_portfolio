import Link from "next/link";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
import { useScrollMarketList } from "../../../../commons/hooks/customs/useScrollMarketList";
// Component
import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import UserIcon01 from "../../../../commons/icon/user/01";
import HeartIcon01 from "../../../../commons/icon/heart/01";
// Type
import type { IMarketListBodyProps } from "../MarketList.types";
// Etc
import { v4 as uuidv4 } from "uuid";
// Style
import * as S from "./MarketListBody.styles";
const SECRET_STRING = "!@#$";

export default function MarketListBody(props: IMarketListBodyProps) {
  const { data, onLoadMore } = useScrollMarketList();
  console.log(data);
  return (
    <S.Body>
      <Searchbar01 onChangeSearch={props.onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
              <S.ItemImg>사진02</S.ItemImg>
              <S.ItemInfo>
                <S.InfoTop>
                  <Link href={`/markets/${el._id}`}>
                    <S.ItemTitle>
                      {el.name
                        .replaceAll(props.keyword, `${SECRET_STRING}${props.keyword}${SECRET_STRING}`)
                        .split(SECRET_STRING)
                        .map((el) => (
                          <S.KeywordToken key={uuidv4()} isMatched={props.keyword === el}>
                            {el}
                          </S.KeywordToken>
                        ))}
                    </S.ItemTitle>
                  </Link>
                  <S.ListRemark>{el.remarks}</S.ListRemark>
                  <div>{el.remarks}</div>
                </S.InfoTop>
                <S.InfoBottom>
                  <S.FlexRow>
                    <UserIcon01 size={16} padding={4} />
                    <div>{el.seller?.name ?? ""}</div>
                  </S.FlexRow>
                  <S.FlexRow>
                    <HeartIcon01 size={20} />
                    <div>{el.pickedCount}</div>
                  </S.FlexRow>
                </S.InfoBottom>
              </S.ItemInfo>
              <S.ItemPrice>
                <S.TagIcon style={{ fontSize: "40px" }} />
                <S.PriceText>{el.price?.toLocaleString()}원</S.PriceText>
              </S.ItemPrice>
            </S.List>
          )) ?? <></>}
        </InfiniteScroll>
      </S.ListWrap>
    </S.Body>
  );
}
