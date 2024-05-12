import Link from "next/link";
import Dompurufy from "dompurify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Hooks
// import { useProduct } from "../../../../commons/hooks/customs/product/useProduct";
import { useProductPicked } from "../../../../commons/hooks/customs/product/useProductPicked";
import useMap from "../../../../commons/hooks/customs/useMap";
// Component
import HeartIcon01 from "../../../../commons/icon/heart/01";
import TagsView01 from "../../../../commons/tags/view/01";
// Style
import * as S from "./ProductDetailBody.styles";
// Type
// import type { IProductDetailProps } from "../ProductDetail.types";
// import { useEffect } from "react";
// import type { IUseditem } from "../../../../../commons/types/generated/types";
import { useIdCheck } from "../../../../commons/hooks/customs/useIdCheck";
import { useFetchProduct } from "../../../../commons/hooks/queries/product/useFetchProduct";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// const TODAY_VIEW_PRODUCT = 2;

export default function ProductDetailBody() {
  // props: IProductDetailProps
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({ useditemId: id });

  // useEffect(() => {
  //   if (data === undefined) return;
  //   const todayView = JSON.parse(localStorage.getItem("todayView") ?? "[]");
  //   // 2. 이미 담겼는지 확인
  //   const temp = todayView.filter((el: IUseditem) => el?._id === data?.fetchUseditem._id);
  //   if (temp.length >= 1) {
  //     return;
  //   }
  //   // 3. 클릭한 상품 추가하기
  //   todayView.unshift(data?.fetchUseditem);
  //   // 로컬스토리지 push 조건
  //   if (todayView.length > TODAY_VIEW_PRODUCT) {
  //     todayView.pop();
  //   }
  //   // 4. 오늘 본 상품 변경
  //   localStorage.setItem("todayView", JSON.stringify(todayView));
  // }, [data]);

  const { onClickPick } = useProductPicked();

  const dataLat = data?.fetchUseditem.useditemAddress?.lat;
  const dataLng = data?.fetchUseditem.useditemAddress?.lng;
  useMap(dataLat, dataLng, false);

  return (
    <S.Body>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <S.BodyTop>
        <S.BodyHeader>
          <S.TitleText>
            <S.Remark>{data?.fetchUseditem.remarks}</S.Remark>
            <S.Name>{data?.fetchUseditem.name}</S.Name>
            <S.Price>{data?.fetchUseditem.price}원</S.Price>
          </S.TitleText>
          <S.Pick>
            <button onClick={onClickPick}>
              <HeartIcon01 size={20} />
            </button>
            <S.PickScore>{data?.fetchUseditem.pickedCount}</S.PickScore>
          </S.Pick>
        </S.BodyHeader>

        <Slider {...settings}>
          {data?.fetchUseditem.images
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
                __html: Dompurufy.sanitize(data?.fetchUseditem.contents ?? ""),
              }}
            />
          )}
          <TagsView01 tags={data?.fetchUseditem.tags} />
        </S.FlexColumn>
      </S.BodyTop>

      <S.BodyBottom>
        <div id="map" style={{ width: "100%", height: "250px" }}></div>
      </S.BodyBottom>
      <S.BtnWrap>
        <Link href={"/products"}>
          <S.LinkBtn>목록으로</S.LinkBtn>
        </Link>
        {/* <S.LinkBtn onClick={onClickPayment}>구매하기</S.LinkBtn> */}
        <Link href={`/products/${data?.fetchUseditem._id}/edit`}>
          <S.LinkBtn>수정하기</S.LinkBtn>
        </Link>
        {/* <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn> */}
      </S.BtnWrap>
    </S.Body>
  );
}
