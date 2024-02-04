import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo onClick={props.onClickLogo}>Logo</S.Logo>
        {props.accessToken === "" ? (
          <div>
            <S.MemberItem isLogin={false}>회원가입</S.MemberItem>
            <S.MemberItem onClick={props.onClickMoveToLogin} isLogin={true}>
              로그인
            </S.MemberItem>
          </div>
        ) : (
          <>{props.data?.fetchUserLoggedIn.name}님, 환영합니다!</>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
