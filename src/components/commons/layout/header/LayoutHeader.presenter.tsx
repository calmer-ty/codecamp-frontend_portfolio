import * as S from "./LayoutHeader.styles";
export default function LayoutHeaderUI(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src={"/images/layout/header/logo.png"} />

        <div>
          <S.MemberBtn isLogin={false}>회원가입</S.MemberBtn>
          <S.MemberBtn isLogin={true}>로그인</S.MemberBtn>
        </div>
      </S.Container>
    </S.Wrapper>
  );
}
