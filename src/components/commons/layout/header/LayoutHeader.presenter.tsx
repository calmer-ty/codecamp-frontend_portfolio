import * as S from "./LayoutHeader.styles";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

import type { MenuProps } from "antd";
import Avatar01 from "../../icons/avatars/01";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  const items: MenuProps["items"] = [
    {
      label: (
        <S.RowWrap>
          <Avatar01 />
          <S.UserInfo>
            <div>{props.data?.fetchUserLoggedIn.name}</div>
            <div>100,000 P</div>
          </S.UserInfo>
        </S.RowWrap>
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
        <S.Logo onClick={props.onClickLogo}>Logo</S.Logo>
        {props.accessToken === "" ? (
          <div>
            <S.JoinBtn onClick={props.onClickMoveToJoin}>회원가입</S.JoinBtn>
            <S.LoginBtn onClick={props.onClickMoveToLogin}>로그인</S.LoginBtn>
          </div>
        ) : (
          <S.UserInfoModal>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <Space>
                  <Avatar01 />
                  <S.RowWrap>{props.data?.fetchUserLoggedIn.name} 님</S.RowWrap>
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
