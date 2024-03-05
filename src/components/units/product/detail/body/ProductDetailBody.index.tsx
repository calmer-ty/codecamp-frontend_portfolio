import Link from "next/link";
import * as S from "./ProductDetailBody.styles";
import Dompurufy from "dompurify";

import type { IProductDetailBodyProps } from "../ProductDetail.types";
import useMapView from "../../../../commons/hooks/customs/useMapView";
import { useProduct } from "../../../../commons/hooks/customs/useProduct";
import { useFetchProduct } from "../../../../commons/hooks/queries/useFetchProduct";
import { useIdCheck } from "../../../../commons/hooks/customs/useIdCheck";
import HeartIcon01 from "../../../../commons/icon/heart/01";
import HeartIcon02 from "../../../../commons/icon/heart/02";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ProductDetailBody(props: IProductDetailBodyProps) {
  useMapView(props.data?.fetchUseditem.useditemAddress?.lat, props.data?.fetchUseditem.useditemAddress?.lng);
  const { onClickDelete } = useProduct();

  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({ useditemId: id });

  // 결제
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp80516171");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: data?.fetchUseditem.name,
        amount: data?.fetchUseditem.price,
        // buyer_email: "gildong@gmail.com",
        // buyer_name: "홍길동",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment", // 모바일에서는 결제 시, 페이지 주소가 바뀜. 따라서 결제 끝나고 돌아갈 주소 입력해야함.
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

          //   백엔드에 결제 관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          //   createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };
  return (
    <S.Body>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <S.BodyTop>
        <S.BodyHeader>
          <S.TitleText>
            <S.Remark>{props.data?.fetchUseditem?.remarks}</S.Remark>
            <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
            <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
          </S.TitleText>
          <S.Pick>
            <HeartIcon01 size={20} />
            <HeartIcon02 size={20} />

            <S.PickScore>{props.data?.fetchUseditem.pickedCount}</S.PickScore>
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
                __html: Dompurufy.sanitize(String(props.data?.fetchUseditem.contents)),
              }}
            />
          )}
          <p>#tags #tags #tags</p>
        </S.FlexColumn>
      </S.BodyTop>

      <S.BodyBottom>
        <div id="map" style={{ width: "100%", height: "250px" }}></div>
      </S.BodyBottom>
      <S.BtnWrap>
        <Link href={"/Products"}>
          <S.LinkBtn>목록으로</S.LinkBtn>
        </Link>
        <S.LinkBtn onClick={onClickPayment}>구매하기</S.LinkBtn>
        <S.LinkBtn onClick={onClickDelete}>삭제하기</S.LinkBtn>
      </S.BtnWrap>
    </S.Body>
  );
}
