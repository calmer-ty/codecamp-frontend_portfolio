import * as S from "./ProductDetailHeader.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getDate } from "../../../../../commons/libraries/utils";

import type { IProductDetailHeaderProps } from "../ProductDetail.types";

export default function ProductDetailHeader(props: IProductDetailHeaderProps) {
  return (
    <S.Header>
      <S.HeaderItem1>
        <Avatar size={60} icon={<UserOutlined />} />
        <S.FlexColumn>
          <S.Seller>{props.data?.fetchUseditem?.name}</S.Seller>
          <S.CreatedAt>Date: {getDate(props.data?.fetchUseditem?.createdAt)}</S.CreatedAt>
        </S.FlexColumn>
      </S.HeaderItem1>
      <S.HeaderItem2>
        <S.LinkBtn src="/images/board/detail/ic_link.png"></S.LinkBtn>
        <S.AddressInfo
          title={`${props.data?.fetchUseditem?.useditemAddress?.address ?? ""} ${
            props.data?.fetchUseditem?.useditemAddress?.addressDetail ?? ""
          }`}
        >
          <img src="/images/board/detail/ic_location.png" />
        </S.AddressInfo>
      </S.HeaderItem2>
    </S.Header>
  );
}
