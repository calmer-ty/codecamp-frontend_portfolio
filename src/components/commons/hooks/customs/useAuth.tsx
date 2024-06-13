import { useRouter } from "next/router";
import { useEffect } from "react";
import { Modal } from "antd";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../../commons/stores";
// import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

export const useAuth = (): void => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  console.log("accessToken:", accessToken, typeof accessToken);

  useEffect(() => {
    if (accessToken === "") {
      void restoreAccessToken.toPromise().then((newAccessToken) => {
        if (newAccessToken === undefined) {
          Modal.error({ content: "로그인 후 이용 가능합니다." });
          void router.push("/user/login");
        }
      });
    }
  }, []);

  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken): void => {
  //     console.log(newAccessToken);
  //     if (newAccessToken === undefined) {
  //       Modal.error({ content: "로그인 후 이용 가능합니다." });
  //       void router.push("/user/login");
  //     }
  //   });
  // }, []);
};
