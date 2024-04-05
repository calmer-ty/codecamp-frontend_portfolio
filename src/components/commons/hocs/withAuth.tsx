// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { ComponentType, ReactElement } from "react";

// import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

import { Modal } from "antd";

export const WithAuth =
  (Component: ComponentType) =>
  <P extends Record<string, unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();
    const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
      void restoreAccessToken.toPromise().then((newAccessToken) => {
        // console.log(newAccessToken);
        if (newAccessToken === undefined) {
          Modal.error({ content: "로그인 후 이용 가능합니다." });
          void router.push("/user/login");
        }
      });
    }, []);

    // 2번 방법
    // useEffect(() => {
    //   void getAccessToken().then((newAccessToken): void => {
    //     if (newAccessToken === undefined) {
    //       alert("로그인 후 이용 가능합니다!!!");
    //       void router.push("/user/login");
    //     }
    //   });
    // }, []);

    return <Component {...props} />;
  };
