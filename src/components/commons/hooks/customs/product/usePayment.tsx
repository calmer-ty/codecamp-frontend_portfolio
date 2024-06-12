import type { IUseditem } from "../../../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

export const usePayment = (
  fetchUseditem: IUseditem
): {
  onClickPayment: () => void;
} => {
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp80516171");
    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: fetchUseditem.name,
        amount: fetchUseditem.price,
        // buyer_email: "gildong@gmail.com",
        // buyer_name: "홍길동",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: `/products/${fetchUseditem._id}`, // 모바일에서는 결제 시, 페이지 주소가 바뀜. 따라서 결제 끝나고 돌아갈 주소 입력해야함.
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
          console.log("결제 실패");
        }
      }
    );
  };
  return {
    onClickPayment,
  };
};
