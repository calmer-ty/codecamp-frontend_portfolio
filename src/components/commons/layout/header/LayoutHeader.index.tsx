import Link from "next/link";
import { accessTokenState } from "../../../../commons/stores";
// Component
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import UserIcon01 from "../../icon/user/01";
// Hooks
import { useRecoilState } from "recoil";
import { useLogoutUser } from "../../hooks/mutations/useLogoutUser";
import { useFetchLoggedIn } from "../../hooks/queries/useFetchLoggedIn";
// Type
import type { MenuProps } from "antd";
// Style
import * as S from "./LayoutHeader.styles";
import { useEffect } from "react";

export default function LayoutHeader(): JSX.Element {
  const { data } = useFetchLoggedIn();
  const [logoutUser] = useLogoutUser();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    // 상태가 변경될 때마다 실행되는 로직
    console.log("토큰이 변경되었습니다");
  }, [accessToken]); // state가 변경될 때마다 useEffect 실행

  const onClickLogout = async () => {
    const result = await logoutUser();
    console.log(result);
    console.log("onClickLogout을 눌렀어요");
  };

  // 아폴로 클라이언트 테스트
  // const client = useApolloClient();
  // const onClickApolloClient = async (): Promise<void> => {
  //   const result = await client.query({
  //     query: FETCH_USER_LOGGED_IN,
  //   });
  //   console.log(result);
  // };

  const items: MenuProps["items"] = [
    {
      label: (
        <S.FlexRow>
          <UserIcon01 size={40} padding={10} />
          <S.UserInfo>
            <div>{data?.fetchUserLoggedIn.name}</div>
            <div>100,000 P</div>
          </S.UserInfo>
        </S.FlexRow>
      ),
      key: "0",
    },
    {
      label: (
        <button style={{ width: "100%" }} onClick={onClickLogout}>
          로그아웃
        </button>
      ),
      key: "1",
    },
    // {
    //   label: <button onClick={onClickApolloClient}>onClickApolloClient</button>,
    //   key: "2",
    // },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Link href={"/"}>
          <S.Logo>
            <img src="/images/layout/header/tae_logo.webp" />
          </S.Logo>
        </Link>
        {accessToken === "" ? (
          <S.FlexRow>
            <Link href={"/user/join"}>
              <S.JoinBtn>회원가입</S.JoinBtn>
            </Link>
            <Link href={"/user/login"}>
              <S.LoginBtn>로그인</S.LoginBtn>
            </Link>
          </S.FlexRow>
        ) : (
          <S.UserInfoModal>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Space>
                  <UserIcon01 size={40} padding={10} />
                  <S.FlexRow>{data?.fetchUserLoggedIn.name} 님</S.FlexRow>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </S.UserInfoModal>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
