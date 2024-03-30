import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../stores";
import { Modal } from "antd";

import type { ComponentType } from "react";

export const WithAuth =
  (Component: ComponentType) =>
  <P extends Record<string, unknown>>(props: P) => {
    const router = useRouter();
    const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
    console.log(restoreAccessToken);

    useEffect(() => {
      void restoreAccessToken.toPromise().then((newAccessToken) => {
        if (newAccessToken === undefined) {
          Modal.error({ content: "로그인 후 이용 가능합니다." });
          void router.push("/user/login");
        }
      });
    }, []);

    return <Component {...props} />;
  };
