// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";
// import { Modal } from "antd";
import type { ComponentType, ReactElement } from "react";

export const WithAuth =
  (Component: ComponentType) =>
  <P extends Record<string, unknown>>(props: P): ReactElement<P> => {
    // const router = useRouter();
    const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

    console.log(restoreAccessToken);

    useEffect(() => {
      void restoreAccessToken.toPromise().then((newAccessToken) => {
        console.log(newAccessToken);
        // if (newAccessToken === undefined) {
        //   Modal.error({ content: "로그인 후 이용 가능합니다." });
        //   void router.push("/user/login");
        // }
      });
    }, [restoreAccessToken]);

    return <Component {...props} />;
  };
