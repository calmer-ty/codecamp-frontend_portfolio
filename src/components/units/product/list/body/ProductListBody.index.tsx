import Link from "next/link";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
// Component
import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import UserIcon01 from "../../../../commons/icon/user/01";
import HeartIcon01 from "../../../../commons/icon/heart/01";
import TagsView01 from "../../../../commons/tags/view/01";
import DataOutputString01 from "../../../../commons/data/output/string/01";
// Style
import * as S from "./ProductListBody.styles";
// Type
import type { IProductListBodyProps } from "../ProductList.types";
// Etc
import { v4 as uuidv4 } from "uuid";
const SECRET_STRING = "!@#$";

export default function ProductListBody(props: IProductListBodyProps) {
  return (
    <S.Body>
      <Searchbar01 onChangeSearch={props.onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
          {props.dataProductsList?.fetchUseditems?.map((el) => (
            <S.List key={uuidv4()}>
              <Link href={`/products/${el._id}`}>
                <a>
                  <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
                </a>
              </Link>
              <S.ItemInfo>
                <S.InfoTop>
                  {/* 링크되는 제목 */}
                  <Link href={`/products/${el._id}`}>
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
                  <DataOutputString01 text={el.remarks} />
                  <TagsView01 tags={el.tags} />
                </S.InfoTop>
                <S.InfoBottom>
                  <S.FlexRow>
                    <UserIcon01 size={16} padding={4} />
                    <span>{el.seller?.name}</span>
                  </S.FlexRow>
                  <S.FlexRow>
                    <HeartIcon01 size={20} />
                    <span>{el.pickedCount}</span>
                  </S.FlexRow>
                </S.InfoBottom>
              </S.ItemInfo>
              <S.ItemPrice>
                <S.TagIcon />
                <S.PriceText>{el.price?.toLocaleString()}원</S.PriceText>
              </S.ItemPrice>
            </S.List>
          )) ?? <></>}
        </InfiniteScroll>
      </S.ListWrap>
    </S.Body>
  );
}
