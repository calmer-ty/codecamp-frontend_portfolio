import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { MarketDetailUIProps } from "./MarketDetail.types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function MarketDetailUI(
  props: MarketDetailUIProps
): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.CardWrap>
          {/*  */}
          <S.Header>
            <S.SellerWrap>
              <Avatar size={60} icon={<UserOutlined />} />
              <S.FlexColumn>
                <S.Seller>{props.data?.fetchUseditem?._id}</S.Seller>
                <S.CreatedAt>
                  Date: {getDate(props.data?.fetchUseditem?.createdAt)}
                </S.CreatedAt>
              </S.FlexColumn>
            </S.SellerWrap>
            <S.FlexRow style={{ justifyContent: "flex-end" }}>
              <S.LinkBtn src="/images/board/detail/ic_link.png"></S.LinkBtn>
              <S.AddressInfo
                title={`${
                  props.data?.fetchUseditem?.useditemAddress?.address ?? ""
                } ${
                  props.data?.fetchUseditem?.useditemAddress?.addressDetail ??
                  ""
                }`}
              >
                <img src="/images/board/detail/ic_location.png"></img>
              </S.AddressInfo>
            </S.FlexRow>
          </S.Header>
          {/* Body */}
          <S.Body>
            <S.BodyTop>
              <S.TitleWrap>
                <S.TitleText>
                  <S.Remark>{props.data?.fetchUseditem?.remarks}</S.Remark>
                  <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
                  <S.Price>240,000원</S.Price>
                </S.TitleText>
                <S.PickedCount>
                  {props.data?.fetchUseditem.pickedCount}
                </S.PickedCount>
              </S.TitleWrap>
              <S.ImgWrap>
                {props.data?.fetchUseditem.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <S.ImgItem
                      key={el}
                      src={`http://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.ImgWrap>
              <S.ContentsWrap>
                <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
                <div>#tags #tags #tags</div>
              </S.ContentsWrap>
            </S.BodyTop>

            <S.BodyBottom>
              <S.Map>Map</S.Map>
            </S.BodyBottom>
          </S.Body>
        </S.CardWrap>

        <S.MoveBtnWrap>
          <S.MoveBtn onClick={props.onClickMoveToPage("/boards")}>
            목록으로
          </S.MoveBtn>
          <S.MoveBtn
            onClick={props.onClickMoveToPage(
              `/markets/${props.data?.fetchUseditem._id}/edit`
            )}
          >
            수정하기
          </S.MoveBtn>
          <S.MoveBtn onClick={props.onClickDeleteMarketDetail}>
            삭제하기
          </S.MoveBtn>
        </S.MoveBtnWrap>
      </S.Wrapper>
    </>
  );
}
