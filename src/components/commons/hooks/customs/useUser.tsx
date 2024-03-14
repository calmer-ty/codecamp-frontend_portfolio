import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { useMoveToPage } from "./useMoveToPage";
import { useCreateUser } from "../mutations/useCreateUser";
import { useLoginUser } from "../mutations/useLoginUser";
import { useLoginUserExample } from "../mutations/useLoginUserExample";

import { Modal } from "antd";
import { accessTokenState } from "../../../../commons/stores";

import type { IFormData } from "../../../units/member/join/MemberJoin.types";

export const useUser = () => {
  const router = useRouter();
  const { visitedPage } = useMoveToPage();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [createUser] = useCreateUser();
  const [loginUser] = useLoginUser();
  const [loginUserExample] = useLoginUserExample();

  const onClickJoin = async (data: IFormData): Promise<void> => {
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
      void router.push("/member/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
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
    onClickJoin,
    onClickLogin,
    onClickLoginExample,
  };
};
