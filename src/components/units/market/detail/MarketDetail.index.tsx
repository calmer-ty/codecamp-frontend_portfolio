import * as S from "./MarketDetail.styles";
import CommentWrite from "../../../commons/comments/board/write/CommentWrite.index";
import CommentList from "../../../commons/comments/board/list/CommentList.index";
// Custom Hooks
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";
import { useFetchMarket } from "../../../commons/hooks/queries/useFetchMarket";
import { useMarket } from "../../../commons/hooks/customs/useMarket";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
// Scroll
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteScroll } from "../../../commons/hooks/customs/useInfiniteScroll";
// Icon
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
// Func
import { getDate } from "../../../../commons/libraries/utils";

export default function MarketDetail(): JSX.Element {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchMarket({
    useditemId: id,
  });
  const { data: dataScroll, onLoadMore } = useInfiniteScroll();

  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDelete } = useMarket();

  console.log(data?.fetchUseditem);
  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          <S.Header>
            <S.SellerWrap>
              <Avatar size={60} icon={<UserOutlined />} />
              <S.FlexColumn>
                <S.Seller>{data?.fetchUseditem?.name}</S.Seller>
                <S.CreatedAt>Date: {getDate(data?.fetchUseditem?.createdAt)}</S.CreatedAt>
              </S.FlexColumn>
            </S.SellerWrap>
            <S.GPSWrap>
              <S.LinkBtn src="/images/board/detail/ic_link.png"></S.LinkBtn>
              <S.AddressInfo
                title={`${data?.fetchUseditem?.useditemAddress?.address ?? ""} ${
                  data?.fetchUseditem?.useditemAddress?.addressDetail ?? ""
                }`}
              >
                <img src="/images/board/detail/ic_location.png"></img>
              </S.AddressInfo>
            </S.GPSWrap>
          </S.Header>
          <S.Body>
            <S.BodyTop>
              <S.TitleWrap>
                <S.TitleText>
                  <S.Remark>{data?.fetchUseditem?.remarks}</S.Remark>
                  <S.Name>{data?.fetchUseditem?.name}</S.Name>
                  <S.Price>{data?.fetchUseditem.price}원</S.Price>
                </S.TitleText>
                <S.PickedCount>{data?.fetchUseditem.pickedCount}</S.PickedCount>
              </S.TitleWrap>
              <S.ImgWrap>
                {data?.fetchUseditem.images
                  ?.filter((el) => el)
                  .map((el) => <S.ImgItem key={el} src={`http://storage.googleapis.com/${el}`} />)}
              </S.ImgWrap>
              <S.ContentsWrap>
                <S.Contents>{data?.fetchUseditem?.contents}</S.Contents>
                <div>#tags #tags #tags</div>
              </S.ContentsWrap>
            </S.BodyTop>

            <S.BodyBottom>
              <S.Map>Map</S.Map>
            </S.BodyBottom>
          </S.Body>
        </S.CardWrap>

        <S.MoveBtnWrap>
          <S.MoveBtn onClick={onClickMoveToPage("/markets")}>목록으로</S.MoveBtn>
          <S.MoveBtn onClick={onClickMoveToPage(`/markets/${data?.fetchUseditem._id}/edit`)}>수정하기</S.MoveBtn>
          <S.MoveBtn onClick={onClickDelete}>삭제하기</S.MoveBtn>
        </S.MoveBtnWrap>
        <>
          <CommentWrite />
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {dataScroll?.fetchBoardComments.map((el, _) => <CommentList key={el._id} el={el}></CommentList>) ?? <></>}
          </InfiniteScroll>
        </>
      </S.Wrapper>
    </>
  );
}
