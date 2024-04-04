import Link from "next/link";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
// Hooks
import { useScrollProductsList } from "../../../../commons/hooks/customs/product/useScrollProductsList";
import { useSearchbar } from "../../../../commons/hooks/customs/useSearch";
// Component
import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import UserIcon01 from "../../../../commons/icon/user/01";
import HeartIcon01 from "../../../../commons/icon/heart/01";
import TagsView01 from "../../../../commons/tags/view/01";
import DataOutputString01 from "../../../../commons/data/output/string/01";
// Style
import * as S from "./ProductListBody.styles";

const SECRET_STRING = "!@#$";

export default function ProductListBody() {
  const { data, onLoadMore, refetch } = useScrollProductsList();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });
  return (
    <S.Body>
      <Searchbar01 onChangeSearch={onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false}>
          {data?.fetchUseditems?.map((el, index) => (
            <S.List key={`${el._id}_${index}`}>
              <Link href={`/products/${el._id}`}>
                <a>
                  <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
                </a>
              </Link>
              <S.ItemInfo>
                <S.InfoTop>
                  <Link href={`/products/${el._id}`}>
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
