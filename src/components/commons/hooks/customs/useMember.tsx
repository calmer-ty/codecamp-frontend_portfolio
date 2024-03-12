import { useRouter } from "next/router";
import { useLoginUser } from "../mutations/useLoginUser";
import { useMoveToPage } from "./useMoveToPage";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

import type { IFormData } from "../../../units/member/login/MemberLogin.types";
import { useLoginUserExample } from "../mutations/useLoginUserExample";

export const useMember = () => {
  const router = useRouter();
  const { visitedPage } = useMoveToPage();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useLoginUser();
  const [loginUserExample] = useLoginUserExample();

  const onClickLogin = async (data: IFormData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined || data.email === "" || data.password === "") {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push(visitedPage);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickLoginExample = async (data: IFormData): Promise<void> => {
    try {
      const result = await loginUserExample({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;

      if (accessToken === undefined || data.email === "" || data.password === "") {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push(visitedPage);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickLogin,
    onClickLoginExample,
  };
};
