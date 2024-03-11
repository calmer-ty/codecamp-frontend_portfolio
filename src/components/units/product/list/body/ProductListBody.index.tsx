import Link from "next/link";
// Hooks
import { useScrollProductList } from "../../../../commons/hooks/customs/useScrollProductList";
import { useSearchbar } from "../../../../commons/hooks/customs/useSearch";
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
// Etc
import { v4 as uuidv4 } from "uuid";
const SECRET_STRING = "!@#$";

export default function ProductListBody() {
  const { data, refetch, onLoadMore } = useScrollProductList();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });

  return (
    <S.Body>
      <Searchbar01 onChangeSearch={onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
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
                        .replaceAll(keyword, `${SECRET_STRING}${keyword}${SECRET_STRING}`)
                        .split(SECRET_STRING)
                        .map((el) => (
                          <S.KeywordToken key={uuidv4()} isMatched={keyword === el}>
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
