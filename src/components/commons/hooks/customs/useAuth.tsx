import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";
// import { useRecoilValueLoadable } from "recoil";

export const useAuth = () => {
  const router = useRouter();
  // const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void getAccessToken().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({ content: "로그인 후 이용 가능합니다." });
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  }, []);
};
