import * as S from "./LayoutNavigation.styles";
export default function LayoutNavigationUI(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Nav>
            <S.NavLink isActive={true}>자유게시판</S.NavLink>
            <S.NavLine />
            <S.NavLink isActive={false}>중고마켓</S.NavLink>
            <S.NavLine />
            <S.NavLink isActive={false}>마이페이지</S.NavLink>
          </S.Nav>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
