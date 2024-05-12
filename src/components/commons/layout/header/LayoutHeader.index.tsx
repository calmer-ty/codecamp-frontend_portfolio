import Link from "next/link";
import { useRecoilState } from "recoil";
// Component
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import UserIcon01 from "../../icon/user/01";
// Custom Hooks
import { useLogoutUser } from "../../hooks/mutations/useLogoutUser";
import { useFetchLoggedIn } from "../../hooks/queries/useFetchLoggedIn";
// Type
import type { MenuProps } from "antd";
// Style
import * as S from "./LayoutHeader.styles";
// import { useApolloClient } from "@apollo/client";
import { accessTokenState } from "../../../../commons/stores";

export default function LayoutHeader(): JSX.Element {
  const { data } = useFetchLoggedIn();
  const [logoutUser] = useLogoutUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // const client = useApolloClient();
  // console.log(client);
  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      console.log("onClickLogout을 눌렀어요", result);
      setAccessToken("");
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
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
