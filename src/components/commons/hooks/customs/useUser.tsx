import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { accessTokenState, visitedPageState } from "../../../../commons/stores";
import { useCreateUser } from "../mutations/user/useCreateUser";
import { useLoginUser } from "../mutations/user/useLoginUser";
import { useLoginUserExample } from "../mutations/user/useLoginUserExample";
import { useLogoutUser } from "../mutations/user/useLogoutUser";

import { Modal } from "antd";
import type { IFormDataUserJoin } from "../../../units/user/join/UserJoin.types";
import type { IFormDataUserLogin } from "../../../units/user/login/UserLogin.types";

export const useUser = (): {
  onClickJoin: (data: IFormDataUserJoin) => Promise<void>;
  onClickLogin: (data: IFormDataUserLogin) => Promise<void>;
  onClickLoginExample: (data: IFormDataUserLogin) => Promise<void>;
  onClickLogout: () => Promise<void>;
} => {
  const router = useRouter();
  const [visitedPage] = useRecoilState(visitedPageState);
  console.log(visitedPage);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [createUser] = useCreateUser();
  const [loginUser] = useLoginUser();
  const [loginUserExample] = useLoginUserExample();
  const [logoutUser] = useLogoutUser();

  const onClickJoin = async (data: IFormDataUserJoin): Promise<void> => {
    const { passwordCheck, ...inputs } = data;
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      Modal.success({
        content: `${result.data?.createUser.name}님 가입에 성공하셨습니다. 다시 로그인 해주세요!`,
      });
      void router.push("/user/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickLogin = async (data: IFormDataUserLogin): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (typeof accessToken !== "string" || data.email === "" || data.password === "") {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }
      setAccessToken(accessToken);
      void router.push(visitedPage);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickLoginExample = async (data: IFormDataUserLogin): Promise<void> => {
    try {
      const result = await loginUserExample({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;

      // if (accessToken === undefined || data.email === "" || data.password === "") {
      if (typeof accessToken !== "string") {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        return;
      }
      setAccessToken(accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 로그아웃
  const onClickLogout = async (): Promise<void> => {
    try {
      const result = await logoutUser();
      console.log("onClickLogout을 눌렀어요", result);
      setAccessToken("");
      void router.push("/user/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickJoin,
    onClickLogin,
    onClickLoginExample,
    onClickLogout,
  };
};
