import Link from "next/link";
import Dompurufy from "dompurify";
import { useEffect } from "react";
// Hooks
import { useIdCheck } from "../../../../commons/hooks/customs/useIdCheck";
import { useProduct } from "../../../../commons/hooks/customs/useProduct";
import { useFetchProduct } from "../../../../commons/hooks/queries/useFetchProduct";
import { useProductPicked } from "../../../../commons/hooks/customs/useProductPicked";
import useMapView from "../../../../commons/hooks/customs/useMapView";
// Component
import HeartIcon01 from "../../../../commons/icon/heart/01";
import HeartIcon02 from "../../../../commons/icon/heart/02";
import TagsView01 from "../../../../commons/tags/view/01";
// Style
import * as S from "./ProductDetailBody.styles";
// Type
import type { IProductDetailBodyProps } from "../ProductDetail.types";
import type { IUseditem } from "../../../../../commons/types/generated/types";

const TODAY_VIEW_PRODUCT = 2;

export default function ProductDetailBody(props: IProductDetailBodyProps) {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({ useditemId: id });

  const { onClickDelete, onClickPayment } = useProduct();
  const { onClickPick, pick } = useProductPicked();

  useMapView(props.data?.fetchUseditem.useditemAddress?.lat, props.data?.fetchUseditem.useditemAddress?.lng);

  // 해당 페이지 정보 로컬 스토리지 저장
  useEffect(() => {
    if (data === undefined) return;
    const todayView = JSON.parse(localStorage.getItem("todayView") ?? "[]");
    // 2. 이미 담겼는지 확인
    const temp = todayView.filter((el: IUseditem) => el?._id === data?.fetchUseditem._id);
    if (temp.length >= 1) {
      return;
    }
    // 3. 클릭한 상품 추가하기
    todayView.unshift(data?.fetchUseditem);
    // 로컬스토리지 push 조건
    if (todayView.length > TODAY_VIEW_PRODUCT) {
      todayView.pop();
    }
    // 4. 오늘 본 상품 변경
    localStorage.setItem("todayView", JSON.stringify(todayView));
  }, [data]);

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
              {pick === 1 && <HeartIcon01 size={20} />}
              {pick === 0 && <HeartIcon02 size={20} />}
            </button>
            <S.PickScore>
              {typeof props.data?.fetchUseditem.pickedCount === "number"
                ? props.data?.fetchUseditem.pickedCount + pick
                : props.data?.fetchUseditem.pickedCount}
            </S.PickScore>
          </S.Pick>
        </S.BodyHeader>
        <S.ImgWrap>
          {props.data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el) => <S.ImgItem key={el} src={`http://storage.googleapis.com/${el}`} />)}
        </S.ImgWrap>
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
        <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
      </S.BtnWrap>
    </S.Body>
  );
}
