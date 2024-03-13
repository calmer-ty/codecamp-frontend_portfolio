import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";

export const useAuth = () => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      void router.push("/member/login");
    }
  }, []);
};
