import Link from "next/link";

import LayoutNavigation from "../navigation/LayoutNavigation.index";

import * as S from "./LayoutHeader.styles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Header>
      <Link href={"/"}>
        <S.Logo>
          <S.LogoImg src="/images/layout/header/tae_logo.webp" />
        </S.Logo>
      </Link>
      <LayoutNavigation />
    </S.Header>
  );
}
