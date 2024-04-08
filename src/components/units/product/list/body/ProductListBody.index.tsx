import { Fragment } from "react";
import Link from "next/link";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
// Hooks
import { useScrollProductsList } from "../../../../commons/hooks/customs/product/useScrollProductsList";
import { useSearchbar } from "../../../../commons/hooks/customs/useSearch";
// Component
import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import UserIcon01 from "../../../../commons/icon/user/01";
import TagsView01 from "../../../../commons/tags/view/01";
import Picked01 from "../../../../commons/picked/01";
// Style
import * as S from "./ProductListBody.styles";

const SECRET_STRING = "!@#$";

export default function ProductListBody() {
  const { data, refetch, onLoadMore } = useScrollProductsList();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });
  console.log("======================================================");

  return (
    <S.Body>
      <Searchbar01 onChangeSearch={onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
          {data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
              <Link href={`/products/${el._id}`}>
                <S.ListItem>
                  <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
                  <S.ItemInfo>
                    <S.InfoTop>
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
                    </S.InfoTop>
                    <S.InfoBottom>
                      <S.FlexRow>
                        <UserIcon01 size={16} padding={4} />
                        <span>{el.seller?.name}</span>
                      </S.FlexRow>
                      <Picked01 text={el.pickedCount} />
                    </S.InfoBottom>
                  </S.ItemInfo>
                  <S.ItemPrice>
                    <S.TagIcon />
                    <S.PriceText>{el.price?.toLocaleString()}원</S.PriceText>
                  </S.ItemPrice>
                </S.ListItem>
              </Link>
            </S.List>
          )) ?? <></>}
        </InfiniteScroll>
      </S.ListWrap>
    </S.Body>
  );
}
