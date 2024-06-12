import Link from "next/link";

import InfiniteScroll from "react-infinite-scroller";

import { useScrollProductsList } from "../../../../commons/hooks/customs/product/useScrollProductsList";
import { useSearchbar } from "../../../../commons/hooks/customs/useSearch";

import Searchbar01 from "../../../../commons/searchbars/01";
import UserIcon01 from "../../../../commons/icon/user/01";
import TagsView01 from "../../../../commons/tags/view/01";
import Picked01 from "../../../../commons/pickeds/01";

import * as S from "./ProductListBody.styles";

const SECRET_STRING = "!@#$";

export default function ProductListBody(): JSX.Element {
  const { data, refetch, onLoadMore } = useScrollProductsList();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });

  return (
    <S.Body>
      <Searchbar01 onChangeSearch={onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
          {data?.fetchUseditems.map((el) => (
            <Link key={el._id} href={`/products/${el._id}`}>
              <S.ListItem>
                <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
                <S.ItemInfo>
                  <S.ItemTitle>
                    {el.name
                      .replaceAll(keyword, `${SECRET_STRING}${keyword}${SECRET_STRING}`)
                      .split(SECRET_STRING)
                      .map((el, index) => (
                        <S.KeywordToken key={`${el}_${index}`} isMatched={keyword === el}>
                          {el}
                        </S.KeywordToken>
                      ))}
                  </S.ItemTitle>
                  <S.ItemRemark>{el.remarks}</S.ItemRemark>
                  <TagsView01 tags={el.tags} />
                  <S.InfoBottom>
                    <S.SellerInfo>
                      <UserIcon01 size={16} padding={4} />
                      <span>{el.seller?.name}</span>
                    </S.SellerInfo>
                    <Picked01 text={el.pickedCount} />
                  </S.InfoBottom>
                </S.ItemInfo>
                <S.ItemPrice>
                  <S.TagIcon />
                  <S.PriceText>{el.price?.toLocaleString()}원</S.PriceText>
                </S.ItemPrice>
              </S.ListItem>
            </Link>
          )) ?? <></>}
        </InfiniteScroll>
      </S.ListWrap>
    </S.Body>
  );
}
