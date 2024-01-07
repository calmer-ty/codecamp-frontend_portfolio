import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #ffd600;
`;
const Container = styled.div``;
const Nav = styled.div`
  display: flex;
`;
const NavLink = styled.button`
  padding: 0 40px;
  font-size: 18px;
`;
const NavLine = styled.div`
  width: 1px;
  background-color: white;
`;

export default function LayoutNavigation(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Container>
          <Nav>
            <NavLink>자유게시판</NavLink>
            <NavLine />
            <NavLink>중고마켓</NavLink>
            <NavLine />
            <NavLink>마이페이지</NavLink>
          </Nav>
        </Container>
      </Wrapper>
    </>
  );
}
