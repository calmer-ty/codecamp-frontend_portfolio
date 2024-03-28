import Link from "next/link";
import { accessTokenState } from "../../../../commons/stores";
// Component
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import UserIcon01 from "../../icon/user/01";
// Hooks
import { useRecoilState } from "recoil";
import { useFetchLoggedIn } from "../../hooks/queries/useFetchLoggedIn";
// Type
import type { MenuProps } from "antd";
// Style
import * as S from "./LayoutHeader.styles";

export default function LayoutHeader(): JSX.Element {
  const { data } = useFetchLoggedIn();
  const [accessToken] = useRecoilState(accessTokenState);

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
      type: "divider",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <Link href={"/"}>
          <S.Logo>Logo</S.Logo>
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
