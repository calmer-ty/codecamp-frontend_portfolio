import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";
import type { IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [accessToken] = useRecoilState(accessTokenState);

  const onClickLogo = (): void => {
    void router.push("/");
  };
  const onClickMoveToLogin = (): void => {
    void router.push("/member/login");
  };
  return (
    <LayoutHeaderUI
      data={data}
      accessToken={accessToken}
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
