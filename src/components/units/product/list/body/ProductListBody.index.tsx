import Link from "next/link";
import { useState } from "react";
// Hooks
import { useScrollProductList } from "../../../../commons/hooks/customs/useScrollProductList";
import { useSearchbar } from "../../../../commons/hooks/customs/useSearch";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
// Component
import Searchbar01 from "../../../../commons/searchbars/01/Searchbar01.index";
import UserIcon01 from "../../../../commons/icon/user/01";
import HeartIcon01 from "../../../../commons/icon/heart/01";
// Etc
import { v4 as uuidv4 } from "uuid";
// Style
import * as S from "./ProductListBody.styles";
// Type
import type { MouseEvent } from "react";
const SECRET_STRING = "!@#$";

export default function ProductListBody() {
  const { data, refetch, onLoadMore } = useScrollProductList();
  const { keyword, onChangeSearch } = useSearchbar({
    refetch,
  });
  const [productIds, setProductIds] = useState([""]);

  const onClickIdCheck = (event: MouseEvent<HTMLAnchorElement>) => {
    const currentId = event.currentTarget.id;
    // setProductIds((prev) => {
    //   console.log(prev);
    // });
    setProductIds((prev) => [currentId, ...prev]);
  };
  console.log(productIds);
  return (
    <S.Body>
      <Searchbar01 onChangeSearch={onChangeSearch} />
      <S.ListWrap>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditems?.map((el) => (
            <S.List key={el._id}>
              <S.ItemImg src={`http://storage.googleapis.com/${el.images?.[0]}`} />
              <S.ItemInfo>
                <S.InfoTop>
                  <Link href={`/products/${el._id}`}>
                    <S.ItemTitle id={el._id} onClick={onClickIdCheck}>
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
                  <S.ListRemark>{el.remarks}</S.ListRemark>
                  <div>#태그란 입니다: {el.tags}</div>
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
