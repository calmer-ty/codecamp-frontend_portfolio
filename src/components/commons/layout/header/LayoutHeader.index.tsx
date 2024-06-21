import Link from "next/link";

import LayoutNavigation from "../navigation/LayoutNavigation.index";

import * as S from "./LayoutHeader.styles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Header>
      <S.HeaderInner>
        <Link href={"/"}>
          <S.Logo>
            <S.LogoImg src="/images/tae_logo_bk.webp" />
          </S.Logo>
        </Link>
        <LayoutNavigation />
      </S.HeaderInner>
    </S.Header>
  );
}
