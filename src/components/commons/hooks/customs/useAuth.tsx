import { useRouter } from "next/router";
import { useEffect } from "react";
import { Modal } from "antd";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../../commons/stores";
// import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

export const useAuth = () => {
  const router = useRouter();
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreAccessToken.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({ content: "로그인 후 이용 가능합니다." });
        void router.push("/user/login");
      }
    });
  }, []);
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken): void => {
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능합니다!!!");
  //       void router.push("/user/login");
  //     }
  //   });
  // }, []);
};
