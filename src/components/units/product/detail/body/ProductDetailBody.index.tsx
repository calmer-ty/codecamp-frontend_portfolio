import Link from "next/link";
import Dompurufy from "dompurify";
// Hooks
import { useProduct } from "../../../../commons/hooks/customs/product/useProduct";
import { useProductPicked } from "../../../../commons/hooks/customs/product/useProductPicked";
import useMap from "../../../../commons/hooks/customs/useMap";
// Component
import HeartIcon01 from "../../../../commons/icon/heart/01";
import TagsView01 from "../../../../commons/tags/view/01";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Style
import * as S from "./ProductDetailBody.styles";
// Type
import type { IProductDetailBodyProps } from "../ProductDetail.types";
// import type { IUseditem } from "../../../../../commons/types/generated/types";

// const TODAY_VIEW_PRODUCT = 2;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ProductDetailBody(props: IProductDetailBodyProps) {
  const { onClickDelete, onClickPayment } = useProduct();
  const { onClickPick } = useProductPicked();

  const dataLat = props.data?.fetchUseditem.useditemAddress?.lat;
  const dataLng = props.data?.fetchUseditem.useditemAddress?.lng;
  useMap(dataLat, dataLng, false);

  return (
    <S.Body>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <S.BodyTop>
        <S.BodyHeader>
          <S.TitleText>
            <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
            <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
          </S.TitleText>
          <S.Pick>
            <button onClick={onClickPick}>
              <HeartIcon01 size={20} />
            </button>
            <S.PickScore>{props.data?.fetchUseditem.pickedCount}</S.PickScore>
          </S.Pick>
        </S.BodyHeader>
        <Slider {...settings}>
          {props.data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el, index) => (
              <S.ImgWrap key={index}>
                <S.ImgItem src={`http://storage.googleapis.com/${el}`} />
              </S.ImgWrap>
            ))}
        </Slider>

        <S.FlexColumn>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurufy.sanitize(props.data?.fetchUseditem.contents ?? ""),
              }}
            />
          )}
          <TagsView01 tags={props.data?.fetchUseditem.tags} />
        </S.FlexColumn>
      </S.BodyTop>

      <S.BodyBottom>
        <div id="map" style={{ width: "100%", height: "250px" }}></div>
      </S.BodyBottom>
      <S.BtnWrap>
        <Link href={"/products"}>
          <S.LinkBtn>목록으로</S.LinkBtn>
        </Link>
        <S.LinkBtn onClick={onClickPayment}>구매하기</S.LinkBtn>
        <Link href={`/products/${props.data?.fetchUseditem._id}/edit`}>
          <S.LinkBtn>수정하기</S.LinkBtn>
        </Link>
        <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
      </S.BtnWrap>
    </S.Body>
  );
}
