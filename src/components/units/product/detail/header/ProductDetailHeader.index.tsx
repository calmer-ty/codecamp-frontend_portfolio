import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getDate } from "../../../../../commons/libraries/utils";

import * as S from "./ProductDetailHeader.styles";
import type { IProductDetailProps } from "../ProductDetail.types";

export default function ProductDetailHeader(props: IProductDetailProps) {
  return (
    <S.Header>
      <S.HeaderLeft>
        <Avatar size={60} icon={<UserOutlined />} />
        <S.FlexColumn>
          <S.Seller>{props.data?.fetchUseditem?.seller?.name}</S.Seller>
          <S.CreatedAt>Date: {getDate(props.data?.fetchUseditem?.createdAt)}</S.CreatedAt>
        </S.FlexColumn>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.LinkBtn src="/images/board/detail/ic_link.png"></S.LinkBtn>
        <S.AddressInfo title={`${props.data?.fetchUseditem?.useditemAddress?.address ?? ""} ${props.data?.fetchUseditem?.useditemAddress?.addressDetail ?? ""}`}>
          <img src="/images/board/detail/ic_location.png" />
        </S.AddressInfo>
      </S.HeaderRight>
    </S.Header>
  );
}
