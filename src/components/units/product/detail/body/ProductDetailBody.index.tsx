import Dompurufy from "dompurify";
import { useEffect } from "react";

import { useProductPicked } from "../../../../commons/hooks/customs/product/useProductPicked";
import { usePayment } from "../../../../commons/hooks/customs/product/usePayment";
import { useProduct } from "../../../../commons/hooks/customs/product/useProduct";
import useMap from "../../../../commons/hooks/customs/useMap";

import HeartIcon01 from "../../../../commons/icon/heart/01";
import TagsView01 from "../../../../commons/tags/view/01";
import { LinkButton02 } from "../../../../commons/element/buttons/link/02";

import type { IProductDetailProps } from "../ProductDetail.types";
import type { IUseditem } from "../../../../../commons/types/generated/types";
import * as S from "./ProductDetailBody.styles";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TODAY_VIEW_PRODUCT = 2;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ProductDetailBody(props: IProductDetailProps) {
  if (props.data === undefined) return <></>;

  const { onClickPayment } = usePayment(props.data?.fetchUseditem);
  const { onClickPick } = useProductPicked(props.data?.fetchUseditem);
  const { onClickDelete } = useProduct({ useditemId: props.data?.fetchUseditem._id });

  useMap(props.data?.fetchUseditem.useditemAddress?.lat, props.data?.fetchUseditem.useditemAddress?.lng, false);

  // 오늘 본 상품
  useEffect(() => {
    // 1. 기존 값을 가져온다
    const todayView = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    // 2. 이미 담겼는지 확인
    const temp = todayView.filter((el: IUseditem) => el?._id === props.data?.fetchUseditem._id);
    if (temp.length >= 1) {
      return;
    }
    // 3. 클릭한 상품 추가하기
    todayView.unshift(props.data?.fetchUseditem);
    // 로컬스토리지 push 조건
    if (todayView.length > TODAY_VIEW_PRODUCT) {
      todayView.pop();
    }
    // 4. 오늘 본 상품 변경
    localStorage.setItem("todayView", JSON.stringify(todayView));
  }, [props.data]);

  return (
    <>
      <S.Body>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
        <S.TextWrap>
          <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
          <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          <S.Price>{props.data?.fetchUseditem.price?.toLocaleString()}원</S.Price>
        </S.TextWrap>
        <S.Pick>
          <button onClick={onClickPick}>
            <HeartIcon01 size={20} />
          </button>
          <span>{props.data?.fetchUseditem.pickedCount}</span>
        </S.Pick>

        <S.CustomSlider {...settings}>{props.data?.fetchUseditem.images?.filter((el) => el).map((el, index) => <S.ImgItem key={index} src={`http://storage.googleapis.com/${el}`} />)}</S.CustomSlider>

        <S.TextWrap>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurufy.sanitize(props.data?.fetchUseditem.contents ?? ""),
              }}
            />
          )}
          <TagsView01 tags={props.data?.fetchUseditem.tags} />
        </S.TextWrap>
        <div id="map" style={{ width: "100%", height: "250px", margin: "60px 0" }}></div>

        <S.BtnWrap>
          <LinkButton02 href="/products" text="목록으로" />
          <S.LinkBtn onClick={onClickPayment}>구매하기</S.LinkBtn>
          <LinkButton02 href={`/products/${props.data?.fetchUseditem._id}/edit`} text="수정하기" />
          <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
        </S.BtnWrap>
      </S.Body>
    </>
  );
}
